(function() {

    // Sites slideshow

    var sites = require('./site_slides');

    var MultiSlideshow = require('multi-slideshow');

    var siteCollection = new MultiSlideshow(sites);

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-site_url")],
        'href',
        'site_url'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-img_url")],
        'src',
        'img_url'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-img_url")],
        'alt',
        'alt_text'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-code_url-icon")],
        'href',
        'code_url'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-short_desc")],
        'innerHTML',
        'short_desc'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-tech_desc")],
        'innerHTML',
        'tech_desc'
    );

    siteCollection.bindElement(
        [document.getElementById("site-slideshow-work_desc")],
        'innerHTML',
        'work_desc'
    );

    siteCollection.bindElement(
        [document.getElementById("sites").style],
        'background',
        'background'
    );

    // associate html elements with events

    // prev slide
    siteCollection.bindPrevEvent(
        document.getElementById("site-slideshow-prev-button"),
        "click"
    );

    // next slide
    siteCollection.bindNextEvent(
        document.getElementById("site-slideshow-next-button"),
        "click"
    );

    // set the first slide
    siteCollection.setSlide(0);

})();
