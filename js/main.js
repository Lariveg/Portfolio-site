
$( document ).ready( function(){

    // $("#main-nav").children().click(function() {
    //     $( "li" ).each(function() {
    //         $( this ).removeClass( "active" );
    //     });
    //     $(this).addClass("active");
    // });


    $(".intro-title").fadeIn(1000);
    $(".intro>p").delay(400).fadeIn(1000);

    $("body").attr({
        "data-spy": "scroll",
        "data-target": "#mainHeader"
    }).scrollspy();

    $(function () {
        $(document).scroll(function () {
        var $nav = $("#mainHeader");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    var navOffset = $('#mainHeader').css("height");
    navOffset = navOffset.slice( 0, - 2)
    console.log(navOffset);

    // Add smooth scrolling on all links inside the navbar
    $("#mainHeader li:not(:first-child) a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate({
                scrollTop: $(hash).offset().top - navOffset
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            history.pushState(null,null,hash);
            });
            
        } // End if

    });

    $("#mainHeader li:first-child a").on('click', function(event){
            
        // Prevent default anchor click behavior
        event.preventDefault();

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate({
            scrollTop: 0
        }, 800, function(){

        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; // For IE and Firefox

        history.pushState(null,null,"#home");

        });    
    })

});

