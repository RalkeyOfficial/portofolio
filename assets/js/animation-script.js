
// scroll background image when window is scrolled
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.container').css({
        'background-position-y': scroll / 3 + 'px'
    });
});


// expand header on element load
$('.header').ready(function() {
    $('.header').css({
        width: '0'
    });

    $('.header').delay(500).animate({
        width: '25em'
    }, 1000, 'easeInOutQuart');
});

// fade in about-me class from left on element load
$('.about-me').ready(function() {
    $('.about-me').css({
        'margin-left': '0',
        opacity: '0'
    });

    $('.about-me').delay(1500).animate({
        'margin-left': '14%',
        opacity: '1'
    }, 2000, 'easeOutQuart');
});
