(function () {
    "use strict";

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
})();