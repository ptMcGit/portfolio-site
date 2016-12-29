(function() {
    var photos = [
        {url: "https://c3.staticflickr.com/6/5568/30553080122_3b008191eb.jpg"},
        {url: "https://c1.staticflickr.com/9/8707/30110056232_5185f3a791.jpg"},
        {url: "https://c7.staticflickr.com/6/5832/29402607974_4e640f8416.jpg"},
        {url: "https://c7.staticflickr.com/9/8426/29772722582_4dcec4e735.jpg"},
        {url: "https://c5.staticflickr.com/9/8644/29712946812_13a3ba2be1.jpg"},
        {url: "https://c8.staticflickr.com/9/8257/29628157751_6f05b231bc.jpg"},
        {url: "https://c4.staticflickr.com/9/8637/29062728083_6a685b69b7.jpg"},
        {url: "https://c8.staticflickr.com/9/8395/28996197983_0649218669.jpg"},
        {url: "https://c5.staticflickr.com/9/8250/29459634092_6a43102eac.jpg"},
        {url: "https://c2.staticflickr.com/9/8073/29529233865_2d26fd1d54.jpg"},
        {url: "https://c6.staticflickr.com/9/8287/28863483293_3ac050c7ef.jpg"},
        {url: "https://c4.staticflickr.com/8/7503/29438933195_4793f081ce.jpg"},
        {url: "https://c4.staticflickr.com/9/8247/29438931955_aabbd89d72.jpg"},
        {url: "https://c5.staticflickr.com/9/8550/29404637716_bb256da3f3.jpg"},
        {url: "https://c8.staticflickr.com/9/8194/29396849055_3841025351.jpg"},
        {url: "https://c2.staticflickr.com/9/8498/29396842825_50c26bf34f.jpg"},
        {url: "https://c2.staticflickr.com/9/8318/28775030473_56b139020a.jpg"},
        {url: "https://c2.staticflickr.com/9/8419/28775030553_53680b2236.jpg"},
        {url: "https://c8.staticflickr.com/9/8326/28775030783_57082fd2ec.jpg"},
        {url: "https://c6.staticflickr.com/9/8204/28775030613_257cfc3a1a.jpg"},
        {url: "https://c4.staticflickr.com/9/8060/28775031243_0752a08323.jpg"},
        {url: "https://c8.staticflickr.com/9/8515/28775030703_6fd6ed09ae.jpg"},
        {url: "https://c2.staticflickr.com/9/8360/28775031353_4c4c259b32.jpg"},
        {url: "https://c4.staticflickr.com/9/8510/28775031483_1a18fb55d7.jpg"},
        {url: "https://c5.staticflickr.com/1/373/31397299612_80b2d3338c.jpg"}
    ];

    // randomly seed photos

    // random number from 0 to max; excluding max
    var randnum = function(max) {
        var min = Math.ceil(0);
        var max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var i;
    var randomPhotos = [];
    var randomI;
    for(i = 0; i < photos.length + randomPhotos.length; i++) {
        randomI = randnum(photos.length);
        randomPhotos.push(photos[randomI]);
        photos.splice(randomI,1);
    }

    var photoCollection = new SlideShow(randomPhotos);

    photoCollection.bindElement(function(that) {
        document.getElementById("photo-slideshow-url")
            .src = that.url;
    });

    photoCollection.bindPrevEvent(
        document.getElementById("photo-slideshow-prev-button"),
        "click"
    );

    photoCollection.bindNextEvent(
        document.getElementById("photo-slideshow-next-button"),
        "click"
    );

    photoCollection.setSlide(0);

})();
