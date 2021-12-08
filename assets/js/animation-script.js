
// scroll background image when window is scrolled
setInterval(function() {
    var scroll = $(window).scrollTop();
    $('.container').css({
        'background-position-y': (scroll * 0.6) + 'px'
        //          change it to -(scroll * num) to make it go faster than actual scroll
    });
}, 10);


// expand header on element load
$('.header').ready(function() {
    $('.header').css({
        width: '0'
    });

    $('.header').delay(500).animate({
        width: '45em'
    }, 1000, 'easeInOutQuart');
});

// fade in small-about-me class from left on element load
$('.small-about-me').children().first().ready(function() {
    $('.small-about-me').children().first()
    .css({
        'left': '0',
        opacity: '0'
    });

    $('.small-about-me').children().first()
    .delay(1500).animate({
        'left': '15%',
        opacity: '1'
    }, 2000, 'easeOutQuart');
});

// fade in slide-show class from right when in view
$(document).ready(function() {
    //      [[---  about me animation  ---]]
    const aboutMe = $('.about-me').children().first();
    aboutMe.css({
        'left': '100%',
        opacity: '0'
    });

    aboutMe.waypoint(function() {
        aboutMe.animate({
            'left': '50%',
            opacity: '1'
        }, 2000, 'easeOutQuart');

    }, { offset : '85%' });

    //      [[---  showcase animation  ---]]
    const showcase = $('.showcase-field').children().first();
    showcase.css({
        'left': '0',
        opacity: '0'
    });

    showcase.waypoint(function() {
        showcase.animate({
            'left': '50%',
            opacity: '1'
        }, 2000, 'easeOutQuart');
    }, { offset: '75%' });

    //      [[---  languages animation  ---]]
    const languages = $('.languages').children().first();
    languages.css({
        'left': '100%',
        opacity: '0'
    });

    languages.waypoint(function() {
        languages.animate({
            'left': '50%',
            opacity: '1'
        }, 2000, 'easeOutQuart');

    }, { offset : '85%' });
});
