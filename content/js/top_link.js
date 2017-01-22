$ = require('jquery');

$('#top-link').hide();

$(document).on('scroll', function() {
    if(scrollY >= $(window).height())
        $('#top-link').show();
    else
        $('#top-link').hide();
})
