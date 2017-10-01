$(document).ready(function() {
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav();

    // Scroll to anchor tags
    $(".ijl-desktop-items").click(function() {
        const section = $(this).attr("href");

        const destination = $(section).offset().top;
        const duration    = Math.trunc((destination - $(document).scrollTop()) / 1.25);
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });
});