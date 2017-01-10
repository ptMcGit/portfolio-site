// Video Slideshow

(function() {

    var MultiSlideshow = require('multi-slideshow');

    var videos = require("./video_slides");

    var videoCollection = new MultiSlideshow(videos);

    // title
    videoCollection.bindElement(
        [document.getElementById("video-slideshow-title")],
        'innerHTML',
        'title'
    );

    // url
    videoCollection.bindElement(
        [document.getElementById("video-slideshow-iframe")],
        'src',
        'url'
    );

    // description
    videoCollection.bindElement(
        [document.getElementById("video-slideshow-description")],
        'innerHTML',
        'description'
    );

    // technical description
    videoCollection.bindElement(
        [document.getElementById("video-slideshow-tech-description")],
        'innerHTML',
        'tech_description'
    );

    // prev slide
    videoCollection.bindPrevEvent(
        document.getElementById("video-slideshow-prev-button"),
        "click"
    );

    // next slide
    videoCollection.bindNextEvent(
        document.getElementById("video-slideshow-next-button"),
        "click"
    );

    // set the first slide
    videoCollection.setSlide(0);

})();
