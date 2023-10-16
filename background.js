chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({url: "https://clients.boursobank.com/"});
});
