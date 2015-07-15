chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var pUrl = tabs[0].url;

    chrome.tabs.update({ url: 'popup.html'}, function(tab) {
      setTimeout(chrome.tabs.update({ url: 'http://voat.co'}), 10000);
    });

    
  });
});