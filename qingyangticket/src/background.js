//开启隐身模式 则可以访问到了 为什么呢？
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  // From content script.
  if (sender.tab) {
    if (request.method == "fromContentScript")
      sendResponse({data: "Response from Background Page"});
    else
      sendResponse({}); // snub them.
  }
});
