(function () {

    console.log("aardvark");
    function SlideCollection(objectArray, firstSlide) {
//        var self = this;
        this.slides = objectArray;
        this.self = this;
        this.slideIndex = firstSlide || 0;
        this.elementBindings = [];

        this.setProto = function(p) {
//            this.__proto__ = p;
            Object.setPrototypeOf(this, p);
            this.updateElements();
        };

        // this.printThis = function() {
        //     console.log("this url: " + this.url);
        // };
        console.log(this.slides);
        this.setSlide = (function(self) {
            console.log(self);
            return function(val) {
                console.log("setSlide hey: " + self.slides);
                self.slideIndex += val;
                if (self.slideIndex < 0) self.slideIndex = (self.slides.length - 1);
                if (self.slideIndex == self.slides.length) self.slideIndex = 0;
                self.setProto(self.slides[self.slideIndex]);

            };
        })(this.self);

        this.gurn = function(val) {
            console.log(val);
        }

        this.bindElements = function(func) {
            this.elementBindings[this.elementBindings.length] = func;
        };

        this.updateElements = function() {
//            console.log("jackrabbit");
            if(this.elementBindings.length === 0) return;
            var f;
            for(f = 0; f < this.elementBindings.length; f++)
                this.elementBindings[f](this.self);
        };

        this.bindNextEvent = function(element, event) {
            console.log("this is " + this.url);
            var f = this.setSlide;
            element.addEventListener(event, function() { f(1); }, false);
        };

        this.bindPrevEvent = function(element, event) {
            console.log("this is " + this.url);
            var f = this.setSlide;
            element.addEventListener(event, function() { f(-1); }, false);
        };
        console.log("kangaroo");
        this.setProto(this.slides[this.slideIndex]);
    }

    // Video Collection Data

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

    // create new collection

    var sc = new SlideCollection(videos);
//    console.log("frog");

    // associate object properties with elements

    sc.bindElements(function(that) {
        document.getElementById("video-iframe")
            .setAttribute("src", that.url);
    });

    sc.bindElements(function(that) {
        document.getElementById("video-description")
            .innerHTML = that.description;
    });

    sc.bindElements(function(that) {
        document.getElementById("tech-description")
            .innerHTML = that.tech_description;
    });

    // bind elements to events

    sc.bindPrevEvent(
        document.getElementById("video-next-button"),
        "click"
    );

    sc.bindNextEvent(
        document.getElementById("video-prev-button"),
        "click"
    );

//    console.log("hey from funcrunner: " + that.url); });

    console.log("ibix");
//    sc.updateElements();


    console.log("llama "  + sc.url);
    console.log("snake" + sc.url);
    console.log("varmot" + sc.url);

})();
