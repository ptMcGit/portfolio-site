// SlideShow

// An object that can be used to create and manipulate slideshows.

// The slides correspond to objects in an array.
// Properties common to slides can be associated with HTML elements.
// Events can be associated with next and previous slide actions.
// The current slide can also be determined directly.

// Instructions:

//  1. Create an instance of SlideShow e.g. 'new Slideshow([{a:1,b:2},{a:3,b:4}])'
//      - notice that the argument is an array of objects (they represent unique information for each slide)
//
//  2. Use bindElement() to pass a special function that contains a setter/assignment that expresses the association of an HTML element with the corresponding property of the "slide class" e.g. 'function(that) { element.innerHTML = that.title; }'
//      - notice the use of 'that' to stand in place of the slide object
//
//  3. Use bindPrev- bindNextEvent to pass two arguments that associate an element and event to previous slide and next slide actions, respectively e.g. 'bindPrevEvent(element, "click")'
//      - when element generates a "click" event the slideshow moves to the previous slide.
//
//  4. Use setSlide() to set the first slide e.g. 'setSlide(0)'
//    - notice that the slide show is zero-indexed
//    - this can also be used to manipulate the slideshow index directly

function SlideShow(objectArray) {
    //console.log("aardvark");
    this.slides = objectArray;
    this.self = this;
    this.slideIndex = 0;
    this.elementBindings = [];

    this.setProto = function(p) {
        //this.__proto__ = p;
        Object.setPrototypeOf(this, p);
        this.updateElements();
    };

    this.setSlide = (function(self) {
        //console.log(self);
        return function(val) {
            //console.log("setSlide hey: " + self.slides);
            self.slideIndex += val;
            if (self.slideIndex < 0) self.slideIndex = (self.slides.length - 1);
            if (self.slideIndex == self.slides.length) self.slideIndex = 0;
            self.setProto(self.slides[self.slideIndex]);

        };
    })(this.self);

    this.bindElement = function(func) {
        this.elementBindings[this.elementBindings.length] = func;
    };

    this.updateElements = function() {
        //console.log("jackrabbit");
        if(this.elementBindings.length === 0) return;
        var f;
        for(f = 0; f < this.elementBindings.length; f++)
            // insert loadSlide logic here e.g. visible
            this.elementBindings[f].apply(this.self);
        // loadSlide invisible
    };

    this.bindNextEvent = function(element, event) {
        //console.log("this is " + this.url);
        var f = this.setSlide;
        element.addEventListener(event, function() { f(1); }, false);
    };

    this.bindPrevEvent = function(element, event) {
        //console.log("this is " + this.url);
        var f = this.setSlide;
        element.addEventListener(event, function() { f(-1); }, false);
    };
    //console.log("kangaroo");

}
