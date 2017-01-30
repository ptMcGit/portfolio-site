// Photos slideshow

(function() {
    var photos = require('./photo_slides.js');

    var MultiSlideshow = require('multi-slideshow');

    var photoCollection = new MultiSlideshow(photos);

    photoCollection.bindElement(
        [document.getElementById('photo-slideshow-url')],
        'src',
        'url'
    );

    photoCollection.bindPrevEvent(
        document.getElementById('photo-slideshow-prev-button'),
        'click'
    );

    photoCollection.bindNextEvent(
        document.getElementById('photo-slideshow-next-button'),
        'click'
    );

    photoCollection.shuffleSlides();

    photoCollection.setSlide(0);
})();
