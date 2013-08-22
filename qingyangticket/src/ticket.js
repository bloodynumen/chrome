url = 'http://music.baidu.com/huodong/vote/vote?code=qingyang&id=1&_=1377159604926';

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "fromPopup") {
    // Send JSON data back to Popup.
    sendResponse({data: "from Content Script to Popup"});

    // Send JSON data to background page.
    chrome.extension.sendRequest({method: "fromContentScript"}, function(response) {
      console.log(response.data);
    });
  } else {
    sendResponse({}); // snub them.
  }
});
