const iam = [
    "Developer",
    "Engineer",
    "Mathematician",
    "Rock Climber",
    "Public Speaker",
    "Cook",
    "Runner",
    "Coffee Lover",
    "Designer",
    "Educator",
    "Researcher",
    "Friend",
    "Listener",
    "Leader",
    "Helper",
    "Music Lover"
];

const iam_length = iam.length;

const ascii = [];

for (let i =  32; i <= 126; i++) ascii.push(i);
for (let i = 179; i <= 218; i++) ascii.push(i);

const ascii_length = ascii.length;

// Add chaos
function collatz(n) {
    return (n % 2) ? (3*n + 1) : (n/2);
}

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

    // Menu
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

    // Splash
    setInterval(() => {
        const str_current = $("#who-am-i").text();
        let   str_new;

        // Make sure that a new description appears
        do {
            str_new = iam[Math.floor(iam_length * Math.random())];

        } while (str_new === str_current);

        // Display random characters during transition
        let str_current_array = $("#who-am-i").text().split("");
        let i = 0;

        const transition = setInterval(() => {
            str_current_array = str_current_array.map(char => {
                const index = collatz(char.charCodeAt(0)) % ascii_length;

                return String.fromCharCode(ascii[index]);

            });

            $("#who-am-i").text(str_current_array.join(""));

            i++;

            if (i === 18) {
                // Display new text
                $("#who-am-i").text(str_new);

                clearInterval(transition);
            }

        }, 25);

    }, 2000);

    // Video
    document.querySelector(".cover_video").playbackRate = 1.4;
});