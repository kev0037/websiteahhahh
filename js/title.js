if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 585);

}

var x = 0;

var titleText = ["Made by Kev"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}