module.exports = (function(){

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

    return [
        n_rooms,
        pearl,
        portfolio
    ];

})();
