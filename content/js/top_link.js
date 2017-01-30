$ = require('jquery');

$('#top-link').hide();

$(document).on('scroll', function() {
    if(scrollY >= 200)
        $('#top-link').show();
    else
        $('#top-link').hide();
});
