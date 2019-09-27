var defaults = {
  username: '',
  password: '',
  enabled: true,
};

function loadSettings() {
  return new Promise(resolve => {
    chrome.storage.sync.get('settings', function(items) {
      if (chrome.runtime.error || items.settings === undefined) {
        resolve(defaults);
        return;
      }
      resolve(items.settings);
    });
  });
}

function saveSettings(settings) {
  chrome.storage.sync.set({'settings': settings}, function() {});
}
