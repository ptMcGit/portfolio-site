(function() {

    // Sites slideshow

    /*jshint multistr: true */

    var n_rooms = {
        site_url:       "https://reddit-clone456.herokuapp.com/",
        img_url:        "../img/nrooms_ss.png",
        alt_text:       "N Rooms Screenshot",
        code_url:       "https://github.com/ptMcGit/reddit_clone",
        short_desc:     "A social media platform with reddit-like features.",
        tech_desc:      "(Ruby on Rails, heroku).",
        work_desc:      "\u2022 front-end development: Bootstrap, jQuery<br>\
\u2022 back-end development: PostgreSQL, devise, pundit, RSpec, Capybara",
        background:     "#4f97ce"
    };

    var pearl = {
        site_url:       "https://bubble-a6b08.firebaseapp.com/#/home",
        img_url:        "../img/pearl_ss.png",
        alt_text:       "Pearl Screenshot",
        code_url:       "https://github.com/TIY-LiveLocal/Pearl",
        short_desc:     "A web application that connects users with local businesses.",
        tech_desc:      "(Ruby on Rails, heroku, Firebase)",
        work_desc:      "\u2022 basic CRUD and RSpec testing<br>\
\u2022 Sidekiq workers with Redis for RESTful calls to Locu, Yelp, and Google Places APIs<br>\
\u2022 Basic authentication solution",
        background:     "#6dc0d1"
    };

    var portfolio = {
        site_url:       "https://ptmcgit.github.io",
        img_url:        "../img/this_site_ss.png",
        alt_text:       "Portfolio Site Screenshot",
        code_url:       "https://github.com/ptMcGit/portfolio-site",
        short_desc:     "The code for this site.",
        tech_desc:      "(nanoc)",
        work_desc:      "\u2022 jQuery, Font-Awesome, SCSS",
        background:     "#48423f"
    };

    /*jshint multistr: false */

    var sites = [
        n_rooms,
        pearl,
        portfolio
    ];

    var siteCollection = new SlideShow(sites);

    siteCollection.bindElement(function() {
        document.getElementById("site-slideshow-site_url")
            .href = this.site_url;
    });

    siteCollection.bindElement(function() {
        var i = document.getElementById("site-slideshow-img_url");
        i.src = this.img_url;
        i.alt = this.alt_text;
    });

    siteCollection.bindElement(function() {
        document.getElementById("site-slideshow-code_url")
            .href = this.code_url;
        //.setAttribute("href", this.code_url);
    });

    siteCollection.bindElement(function() {
        document.getElementById("site-slideshow-short_desc")
            .innerHTML = this.short_desc;
    });

    siteCollection.bindElement(function() {
        document.getElementById("site-slideshow-tech_desc")
            .innerHTML = this.tech_desc;
    });

    siteCollection.bindElement(function() {
        document.getElementById("site-slideshow-work_desc")
            .innerHTML = this.work_desc;
    });

    siteCollection.bindElement(function() {
        document.getElementById("sites")
            .style.backgroundColor = this.background;
    });

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
