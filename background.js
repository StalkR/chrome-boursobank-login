async function init() {
  var settings = await loadSettings();
  setIcon(settings.enabled);
}

async function iconClicked(tab) {
  var settings = await loadSettings();
  settings.enabled = !settings.enabled;
  setIcon(settings.enabled);
  saveSettings(settings);
}

function setIcon(enabled) {
  var path = 'icon48-grey.png';
  if (enabled) path = 'icon48.png';
  chrome.browserAction.setIcon({path: path});
}

function storageChanged(changes, namespace) {
  if (changes.settings === undefined) return;
  setIcon(changes.settings.newValue.enabled);
}

chrome.browserAction.onClicked.addListener(iconClicked);
chrome.storage.onChanged.addListener(storageChanged);
init();
