document.addEventListener('DOMContentLoaded', init, false);

async function init() {
  let settings = await loadSettings();
  document.getElementById('username').value = settings.username;
  document.getElementById('password').value = settings.password;
  document.getElementById('save').onclick = save;
}

async function save() {
  let settings = await loadSettings();
  settings.username = document.getElementById('username').value,
  settings.password = document.getElementById('password').value,
  saveSettings(settings);
}
