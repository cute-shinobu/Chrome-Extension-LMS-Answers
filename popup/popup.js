document.addEventListener('DOMContentLoaded', function() {
    var showButton = document.getElementById('show_answers');
    showButton.addEventListener('click', function() { 
        show();
    }, false);
}, false);

function show() {
    chrome.runtime.sendMessage({command: "show_answers"}, function(response) {
        console.log("message sent");
      });
}

