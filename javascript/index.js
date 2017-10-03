/****************************************************************************

    Initialization for scroll

*****************************************************************************/
const articleLocations = [];

$.each($("article"), (index, article) => {
    // Find where each article starts
    articleLocations.push(Math.floor($(article).position().top) - 150);

});

// Account for the fact that the last article doesn't have much height
articleLocations[articleLocations.length - 1] -= 400;

function checkSlide(event) {
    const myLocation = $(window).scrollTop();

    for (let i = 0; i < articleLocations.length; i++) {
        if (myLocation >= articleLocations[i]) {
            $("#ijl-menu-desktop > *").removeClass("active cyan darken-3");
            $(`#ijl-menu-desktop > li:nth-of-type(${i})`).addClass("active cyan darken-3");
        }
    }
}

// Stop a function from running too many times
function debounce(func, wait = 10, immediate = true) {
    let timeout;

    return function() {
        const context = this, args = arguments;

        function later() {
            timeout = null;

            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}


/****************************************************************************

    Initialization for splash

*****************************************************************************/
const iam = ["Analyst", "Coffee Lover", "Designer", "Developer", "Educator", "Engineer", "Experimenter", "Friend", "Helper", "Leader", "Listener", "Mathematician", "Mentor", "Music Lover", "Public Speaker", "Researcher", "Rock Climber", "Runner", "Storyteller", "Visionary", "Volunteer"];
const iam_length = iam.length;

// Allowable ASCII values
const ascii = [];

for (let i =  32; i <= 126; i++) ascii.push(String.fromCharCode(i));
for (let i = 179; i <= 218; i++) ascii.push(String.fromCharCode(i));

const ascii_length = ascii.length;

// Add chaos
function collatz(n) {
    return (n % 2) ? (3*n + 1) : (n/2);
}


/****************************************************************************
    
    Wait for user response
    
*****************************************************************************/
let deviceType;

function detectDevice() {
    switch ($("#ijl-device-detector").css("font-size")) {
        // Extra large
        case "4px":
            $("#splash > section > div").addClass("ijl-splash-wrapper");
            $("#splash > section > div").css({"margin": "0"});

            break;

        // Large
        case "3px":
            $("#splash > section > div").addClass("ijl-splash-wrapper");
            $("#splash > section > div").css({"margin": "0"});

            break;

        // Medium
        case "2px":
            $("#splash > section > div").removeClass("ijl-splash-wrapper");
            $("#splash > section > div").css({"margin": "1em 0 2.5em 0"});

            break;

        // Small
        case "1px":
            $("#splash > section > div").removeClass("ijl-splash-wrapper");
            $("#splash > section > div").css({"margin": "1em 0 2.5em 0"});

            break;

    }
}

$(window).resize(debounce(detectDevice));

$(document).ready(function() {
    detectDevice();


    /************************************************************************
    
        Navbar

    *************************************************************************/
    $(".button-collapse").sideNav({"closeOnClick": true});


    /************************************************************************
    
        Scroll

    *************************************************************************/
    window.addEventListener("scroll", debounce(checkSlide));


    /************************************************************************
    
        Jump to articles

    *************************************************************************/
    $(".brand-logo").click(function(event) {
        // Hide anchor tag in the URL
        event.preventDefault();

        // Remove highlight
        $("#ijl-menu-desktop > *").removeClass("active cyan darken-3");

        // Find where to go and how fast
        const destination = -$("nav").height();
        const duration    = Math.trunc(0.4 * Math.abs(destination - $(document).scrollTop()));
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });

    $(".ijl-menu-items-desktop").click(function(event) {
        // Hide anchor tag in the URL
        event.preventDefault();

        // Find which menu item was clicked
        const index = $(".ijl-menu-items-desktop").index(this);
        
        // Highlight the menu item
        $("#ijl-menu-desktop > *").removeClass("active cyan darken-3");
        $(`#ijl-menu-desktop > li:nth-of-type(${index + 1})`).addClass("active cyan darken-3");

        // Find where to go and how fast
        const section     = $(this).attr("href");
        const destination = Math.ceil($(section).offset().top - $("nav").height());
        const duration    = Math.trunc(0.4 * Math.abs(destination - $(document).scrollTop()));
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });

    $(".ijl-menu-items-mobile").click(function(event) {
        // Hide anchor tag in the URL
        event.preventDefault();

        // Find which menu item was clicked
        const index = $(".ijl-menu-items-mobile").index(this);
        
        // Highlight the menu item
        $("#ijl-menu-mobile > *").removeClass("active");
        $(`#ijl-menu-mobile > li:nth-of-type(${index + 3})`).addClass("active");

        // Find where to go and how fast
        const section     = $(this).attr("href");
        const destination = Math.ceil($(section).offset().top - $("nav").height());
        const duration    = Math.trunc(0.4 * Math.abs(destination - $(document).scrollTop()));
        
        $("html, body").animate({"scrollTop": destination}, duration);

        // Close the mobile menu
    });


    /************************************************************************
    
        Splash

    *************************************************************************/
    let str_previous = "",
        str_current  = $(".ijl-who").text(),
        str_new;

    setInterval(() => {
        // Make sure to display a different description
        do {
            str_new = iam[Math.floor(iam_length * Math.random())];

        } while (str_new === str_current || str_new === str_previous);

        // Display random characters during transition
        let str_current_array = str_current.split("");
        let count = 0;

        const transition = setInterval(() => {
            str_current_array.forEach((value, index, array) => {
                array[index] = ascii[collatz(value.charCodeAt(0)) % ascii_length];

            });

            count++;

            if (count < 20) {
                $(".ijl-who").text(str_current_array.join(""));

            } else {
                // Display new text
                $(".ijl-who").text(str_new);

                // Update
                str_previous = str_current;
                str_current  = str_new;

                clearInterval(transition);
            }

        }, 25);

    }, 2500);

    // Speed up the video
    document.querySelector(".cover_video").playbackRate = 1.4;


    /************************************************************************
    
        Portfolio

    *************************************************************************/
    $(".parallax").parallax();

    $(".chips").material_chip();
});