$(document).ready(function(){
    /* disabled - this seems to cause a load problem with FA icons it toggles */
    $("#footer-links").hide();
    $("#button-diversion").click(function(){
        $("#footer-links").show();
    });
    /* */

    $(".button-email").click( function(){
        provideEmail()
    });

});

function provideEmail() {
    window.alert("zdhadgraft@gmail.com");
}
