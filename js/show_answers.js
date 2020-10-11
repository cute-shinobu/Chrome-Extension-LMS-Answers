//Показывает ответы. 
function show_answers(){
    //Считает количество доступных фреймов
    function count_frames(){
        return document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelectorAll("div#holder > iframe").length
    }

    //Показывает ответы по всем фреймам
    var idx;
    for (idx = 0; idx < count_frames(); idx++) {
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("table.resultstable")).map(function(x) {x.setAttribute("style", "display")})
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("div.table-row")).map(function(x) {x.setAttribute("style", "display")})
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("div.table-row > div.table")).map(function(x) {x.setAttribute("style", "display")})
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("div.model-answer")).map(function(x) {x.setAttribute("style", "display")})
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("octs-model-answer.table-row")).map(function(x) {x.setAttribute("style", "display")})
        Array.from(document.querySelector("iframe#content-iframe").contentWindow.document.querySelector("frameset#ScormMainFrameset").querySelector("frame#ScormContent").contentWindow.document.querySelector("iframe#iframe_"+idx).contentWindow.document.querySelectorAll("ul.phrases.results")).map(function(x) {x.setAttribute("style", "display")})
    }
}
show_answers()

//octs-model-answer