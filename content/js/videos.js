(function() {
    console.log("hello from videos.");
    var merry_medley={
        url: "https://www.youtube.com/embed/WHrfZEMJyG8",
        description: "Mashup of videos edited to create new music from melodic and rhythmic elements.",
        tech_description: "(Co-editor; FinalCut Pro, AfterEffects)"};

    var red_cape = {
        url: "https://www.youtube.com/embed/ZmVo7QaEErY",
        description: "Chronicle of the coup de'état in Wilmington, NC in 1898.",
        tech_description: "(First Assistant Camera; 35mm)"};

    var dolphin_promo = {
        url: "https://www.youtube.com/embed/u4oHrng4B3Y",
        description: "Promotional for small music festival.",
        tech_description: "(AfterEffects, Photoshop, FinalCut Pro)"};

    var horologist = {
        url: "https://www.youtube.com/embed/lYHrl3nDGAs",
        description: "48-hour film festival adventure serial.",
        tech_description: "(Editor, Chroma-key; FinalCut Pro, AfterEffects)"};

    var magic_8_ball = {
        url: "https://www.youtube.com/embed/vuz1Wwy1d6A",
        description: "A troubled writer explores his past.",
        tech_description: "(Director of Photography, Camera Operator, Add'l post-production)"};

    var lazer_tag = {
        url: "https://www.youtube.com/embed/uXpg3LmgdUM",
        description: "Lazer tag with real lazers!\n(Warning: language, gore)",
        tech_description: "(Co-camera, Co-editor; AfterEffects, FinalCut Pro)"};

    var videos=[
        dolphin_promo,
        merry_medley,
        red_cape,
        horologist,
        magic_8_ball,
        lazer_tag
    ];

        // "https://www.youtube.com/embed/u4oHrng4B3Y",
        // "https://www.youtube.com/embed/WHrfZEMJyG8",
        // "https://www.youtube.com/embed/ZmVo7QaEErY",
        // "https://www.youtube.com/embed/uXpg3LmgdUM",
        // "https://www.youtube.com/embed/vuz1Wwy1d6A",
        // "https://www.youtube.com/embed/lYHrl3nDGAs",

    var videoBox = document.getElementById("video-iframe");
    var videoDescription = document.getElementById("video-description");
    var techDescription = document.getElementById("tech-description");

    var nextButton = document.getElementById("video-next-button");
    var prevButton = document.getElementById("video-prev-button");

    var videoIndex = 0;

    setVideo(0);

    nextButton.addEventListener("click", function() { setVideo(-1); }, false);
    prevButton.addEventListener("click", function() { setVideo(1); }, false);

    function setVideo(val) {
        videoIndex += val;
        if (videoIndex < 0) videoIndex = (videos.length - 1);
        if (videoIndex == videos.length) videoIndex = 0;
        console.log("val is: " + videoIndex +" "+ videos[videoIndex]);
        videoBox.setAttribute("src", videos[videoIndex].url);
        videoDescription.innerHTML = videos[videoIndex].description;
        techDescription.innerHTML = videos[videoIndex].tech_description;
    }

})();
