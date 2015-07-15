document.addEventListener('DOMContentLoaded', function() {
  setTimeout(
	function() {
	  chrome.tabs.update({ url: 'http://voat.co'});
	},
  1000);	
});
