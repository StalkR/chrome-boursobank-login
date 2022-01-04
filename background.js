chrome.action.onClicked.addListener(function(activeTab){
  chrome.tabs.create({url: "https://clients.boursorama.com/"});
});
