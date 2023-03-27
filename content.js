(function(){
  const url = new URL(window.location.href);
  if (url.searchParams.has('expire')) {
    url.searchParams.delete('expire');
    window.location.replace(url);
    return;
  }
  autofill();
})();

async function autofill() {
  const settings = await loadSettings();
  if (!settings.username || !settings.password) {
    return;
  }

  const buttons = document.getElementsByClassName('c-button--primary');
  if (buttons.length < 1) {
    console.log('Could not find primary buttons');
    return;
  }

  const inputLogin = document.getElementById('form_clientNumber');
  if (!inputLogin) {
    console.log('Could not find input login');
    return;
  }
  inputLogin.value = settings.username;

  buttons[0].click();

  const inputPassword = document.getElementById('form_password');
  if (!inputPassword) {
    console.log('Could not find form_password');
    return;
  }
  const uls = await (async () => {
    const max = 10;
    let attempt = 1;
    while (true) {
      const e = document.getElementsByClassName('password-input');
      if (e.length == 1) return e;
      console.log('Could not find #password-input, attempt ' + attempt + '/' + max);
      if (attempt++ >= max) return undefined;
      await sleep(100);
    }
  })();
  if (!uls) {
    console.log('Could not find #password-input');
    return;
  }
  const lis = uls[0].children;
  if (lis.length != 10) {
    console.log('Want 10 <li> inputs, got ' + lis.length);
    return;
  }

  let codes = {};
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].children.length != 1) {
      console.log('Want 1 child for <li> # ' + i + ', got ' + lis[i].children.length);
      return;
    }
    const button = lis[i].children[0];
    if (button.children.length != 1) {
      console.log('Want 1 child for button # ' + i + ', got ' + button.children.length);
      return;
    }
    const img = button.children[0].src;

    let min = +Infinity;
    let found = 0;
    for (const n in IMAGES) {
      const mismatch = await compare(img, IMAGES[n]);
      if (mismatch < min) {
        min = mismatch;
        found = n;
      }
    }
    codes[found] = button;
  }

  const password = settings.password;
  for (let i = 0; i < password.length; i++) {
    const n = parseInt(password.charAt(i));
    codes[n].click();
  }
}

function compare(img1, img2) {
  return new Promise(resolve => {
    resemble(img1).compareTo(img2).onComplete(function(data) {
      resolve(parseFloat(data.misMatchPercentage));
    });
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
