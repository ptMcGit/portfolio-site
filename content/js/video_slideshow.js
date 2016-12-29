(function() {

    // Video Collection Data

    //console.log("hello from videos.");

    var merry_medley={
        title:              "Merry Medley",
        url:                "https://www.youtube.com/embed/WHrfZEMJyG8",
        description:        "Mashup of videos edited to create new music from melodic and rhythmic elements.",
        tech_description:   "(Co-editor; FinalCut Pro, AfterEffects)"
    };

    var red_cape = {
        title:              "The Red Cape",
        url:                "https://www.youtube.com/embed/ZmVo7QaEErY",
        description:        "Chronicle of the coup de'état in Wilmington, NC in 1898.",
        tech_description:   "(First Assistant Camera; 35mm)"
    };

    var dolphin_promo = {
        title:              "Untitled Promotional",
        url:                "https://www.youtube.com/embed/u4oHrng4B3Y",
        description:        "Promotional for small music festival.",
        tech_description:   "(AfterEffects, Photoshop, FinalCut Pro)"
    };

    var horologist = {
        title:              "The Adventures of Martin Dockery",
        url:                "https://www.youtube.com/embed/lYHrl3nDGAs",
        description:        "48-hour film festival adventure serial.",
        tech_description:   "(Editor, Chroma-key; FinalCut Pro, AfterEffects)"
    };

    var magic_8_ball = {
        title:              "Magic Eight Ball",
        url:                "https://www.youtube.com/embed/vuz1Wwy1d6A",
        description:        "A troubled writer explores his past.",
        tech_description:   "(Director of Photography, Camera Operator, Add'l post-production)"
    };

    var lazer_tag = {
        title:              "Deadly Game",
        url:                "https://www.youtube.com/embed/uXpg3LmgdUM",
        description:        "Lazer tag with real lazers!\n(Warning: language, gore)",
        tech_description:   "(Co-camera, Co-editor; AfterEffects, FinalCut Pro)"
    };

    var videos = [
        dolphin_promo,
        merry_medley,
        red_cape,
        horologist,
        magic_8_ball,
        lazer_tag
    ];

    // create new collection

    var videoCollection = new SlideShow(videos);

    // associate object data with html elements

    // title
    videoCollection.bindElement(function() {
        document.getElementById("video-slideshow-title")
            .innerHTML = this.title;
    });

    // url
    videoCollection.bindElement(function() {
        document.getElementById("video-slideshow-iframe")
            .setAttribute("src", this.url);
    });

    // description
    videoCollection.bindElement(function() {
        document.getElementById("video-slideshow-description")
            .innerHTML = this.description;
    });

    // technical description
    videoCollection.bindElement(function() {
        document.getElementById("video-slideshow-tech-description")
            .innerHTML = this.tech_description;
    });

    // associate html elements with events

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

//console.log("zebra2");
