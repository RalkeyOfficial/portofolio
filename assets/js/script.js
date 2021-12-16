var fileExt = ".svg";
let fileUrl = "../assets/images/background-images/"

let validImages = [];

$.get(fileUrl, function(data) {
    let filteredData = $('div', data)['prevObject'].find('li').find('span.name').filter(function() {
        // filter out all the files that don't end in .svg
        return this.textContent.match(fileExt);
    });

    // loop through the data and add the text to a array
    filteredData.each(function() {
        validImages.push(this.textContent);
    });
    
}).done(function() {
    // set the background image to a random image
    let randomImage = validImages[Math.floor(Math.random() * validImages.length)];
    $('.container').css('background-image', `url('../assets/images/background-images/${randomImage}')`);
});


// when clicking on an image open image viewer
$('img').click(function() {
    if ($(this).attr('alt') == 'ignore-viewer') return;

    let imageUrl = $(this).attr('src');
    $('.img-viewer').removeClass('hidden');
    $('#img-viewer-image').attr('src', imageUrl);
});
$('.img-viewer').click(function() {
    $(this).addClass('hidden');
});


// secret button effects
$('#secret-button').removeClass('hidden');
$('#secret-button').click(function() {

    // give rotate classes to fields
    $('.small-about-me').toggleClass('rotateLeft');
    $('.about-me').toggleClass('rotateRight');
    $('.showcase-field').toggleClass('rotateLeft');
    $('.languages').toggleClass('rotateRight');

    /* 
        i feel like an idiot for even trying to do this with javascript
    */

});


// once clicked on the email-open-button widen the email element
$('#email-open-button').click(function() {
    $(this).toggleClass('emailWiden');
    $(this).toggleClass('emailUnwiden');
});

$('#discord-open-button').click(function() {
    $(this).toggleClass('discordWiden');
    $(this).toggleClass('discordUnwiden');
});


// once word has been typed out, launch confetti
const keys = ['a', 'w', 'e', 's', 'o', 'm', 'e'];
const wordLength = keys.length;
let currentWord = 0;

$(document).keypress(function(e) {
    if (e.keyCode !== keys[currentWord].charCodeAt(0)){
        currentWord = 0;
        return;
    }

    currentWord++;

    if (currentWord === wordLength) {
        launchConfetti(0.2);
        launchConfetti(0.5);
        launchConfetti(0.8);
        currentWord = 0;
    }
});

function launchConfetti(x = 0.5) {
    var count = 200;
    var defaults = {
        origin: { x: x, y: 1 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}
