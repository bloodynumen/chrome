$().ready(function(){
    $('.save').click(function(){
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {method: "fromPopup", tabid: tab.id}, function(response) {
                console.log(response.data);
            });
        });
        //chrome.extension.sendRequest({action:'start'}, function(response) {
            //    console.log(response.flag);  
    //});
    });
});
