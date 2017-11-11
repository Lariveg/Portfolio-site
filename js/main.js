$("#main-nav").children().click(function() {
    $( "li" ).each(function() {
        $( this ).removeClass( "active" );
    });
    $(this).addClass("active");
});

