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
    let imageUrl = $(this).attr('src');
    $('.img-viewer').removeClass('hidden');
    $('#img-viewer-image').attr('src', imageUrl);
});
$('.img-viewer').click(function() {
    $(this).addClass('hidden');
});
