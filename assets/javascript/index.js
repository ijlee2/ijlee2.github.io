$(document).ready(function() {
    // Navbar for mobile
    $(".button-collapse").sideNav();

    // Scroll to anchor tags
    $(".brand-logo").click(function() {
        // Remove highlight
        $("#ijl-menu-desktop > *").removeClass("active green darken-2");

        // Find where to go and how fast
        const destination = 0 - $("nav").height();
        const duration    = Math.trunc(Math.abs(destination - $(document).scrollTop()) / 1.25);
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });

    $(".ijl-menu-items-desktop").click(function() {
        // Find which menu item was clicked
        const index = $(".ijl-menu-items-desktop").index(this);
        
        // Highlight the menu item
        $("#ijl-menu-desktop > *").removeClass("active cyan darken-3");
        $(`#ijl-menu-desktop > li:nth-of-type(${index + 1})`).addClass("active cyan darken-3");

        // Find where to go and how fast
        const section     = $(this).attr("href");
        const destination = $(section).offset().top - $("nav").height();
        const duration    = Math.trunc(Math.abs(destination - $(document).scrollTop()) / 1.25);
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });

    document.querySelector(".cover_video").playbackRate = 1.4;
});