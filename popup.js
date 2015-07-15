chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg === 'reddit') {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
      var pUrl = tabs[0].url;

      chrome.tabs.update({ url: 'popup.html'});
    });
  }
});
