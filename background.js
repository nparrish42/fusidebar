chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({'active': true}, function(tabs) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  });
});
