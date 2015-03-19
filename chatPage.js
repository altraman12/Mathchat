var spreadSheetBridge;

function clearTextbox() {
    "use strict";
    document.getElementById("inputBox").value = "";
}

function send() {
    "use strict";
    document.getElementById("messages").innerHTML += "<br>" + document.getElementById("inputBox").value;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    clearTextbox();
    spreadSheetBridge = document.getElementById('bridge');
    spreadSheetBridge.paint();
}

var menuOpen = false;

var main = function () {
    "use strict";
    $('.open').click(function () {
        if (!menuOpen) {
            $('.menu').animate({
                left: '0px'
            }, 200);

            $('body').animate({
                left: '200px'
            }, 200);
            menuOpen = true;
        } else {
            $('.menu').animate({
                left: '-200px'
            }, 200);

            $('body').animate({
                left: '0px'
            }, 200);
            menuOpen = false;
        }
    });
};

$(document).ready(main);