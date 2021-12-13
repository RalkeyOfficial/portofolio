
// scroll background image when window is scrolled
setInterval(function() {
    var scroll = $(window).scrollTop();
    $('.container').css({
        'background-position-y': (scroll * 0.6) + 'px'
        //          change it to -(scroll * num) to make it go faster than actual scroll
    });
}, 8);


// expand header on element load
$('.header').css({
    width: '0'
});
$('.header').delay(500).animate({
    width: '45em'
}, 1000, 'easeInOutQuart');


// fade in small-about-me class from left on element load
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

}, { offset : '75%' });


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
}, { offset : '75%' });


//      [[---  languages list animation  ---]]
const languages_list = $('.languages').find('ul');
languages_list.css({
    'height': '1.6em'
});
const languages_list_items = languages_list[0].children.length;
languages_list.waypoint(function() {
    languages_list.delay(1000).animate({
        'height': `${languages_list_items * 1.6}em`
    }, 2000, 'easeOutQuart');
}, { offset : '75%' });

