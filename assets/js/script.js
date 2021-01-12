
$(document).ready(function () {
    $(document).on("click", '.burger', function () {
        $('body').toggleClass('modal-open');
    });

    var elem = $('header');
    var doc = $(document);

    function scrolled() {
        var threshold = doc.scrollTop() > 50;
        elem.toggleClass('scrolled', threshold);
    }

    if(scrolled < 50) {
        elem.addClass(scrolled);
    } else {
        elem.removeClass(scrolled);
    }

    $(window).on({scroll: scrolled});



});
