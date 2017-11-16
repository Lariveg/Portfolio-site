$("#main-nav").children().click(function() {
    $( "li" ).each(function() {
        $( this ).removeClass( "active" );
    });
    $(this).addClass("active");
});

$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainHeader");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
