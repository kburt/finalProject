$(document).ready(function(){
        $( "a.goToLogin" ).click(function( event ) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 900);
        });
    });