chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.command === "show_answers") {
            chrome.tabs.executeScript({
                file: 'js/show_answers.js'
              });
        }
    } 
);


