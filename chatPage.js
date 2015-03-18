function clearTextbox() {
    document.getElementById("inputBox").value = "";
}

function send() {
    document.getElementById("messages").innerHTML += "<br>" + document.getElementById("inputBox").value;
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

var menuOpen = false;

var main = function () {
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