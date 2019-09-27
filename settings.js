const DEFAULTS = {
  username: '',
  password: ''
};

function loadSettings() {
  return new Promise(resolve => {
    chrome.storage.sync.get('settings', function(items) {
      if (chrome.runtime.error || items.settings === undefined) {
        resolve(DEFAULTS);
        return;
      }
      resolve(items.settings);
    });
  });
}

function saveSettings(settings) {
  chrome.storage.sync.set({'settings': settings}, function() {});
}
