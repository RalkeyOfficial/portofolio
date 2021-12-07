
// scroll background image when window is scrolled
setInterval(function() {
    var scroll = $(window).scrollTop();
    $('.container').css({
        'background-position-y': (scroll * 0.6) + 'px'
    });
}, 10);


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
        'margin-left': '15%',
        opacity: '1'
    }, 2000, 'easeOutQuart');
});

// fade in slide-show class from right when in view
$(document).ready(function() {
    //        [[---  slider animation  ---]]
    const slider = $('.slider').children().first();
    slider.css({
        'margin': '0',
        opacity: '0'
    });

    slider.waypoint(function() {
        slider.animate({
            'margin': '50%',
            opacity: '1'
        }, 2000, 'easeOutQuart');
    }, { offset: '75%' });
});
