// Descriptions of me
const iam        = ["Analyst", "Coffee Lover", "Designer", "Developer", "Educator", "Engineer", "Friend", "Helper", "Leader", "Listener", "Mathematician", "Music Lover", "Public Speaker", "Researcher", "Rock Climber", "Runner", "Storyteller", "Volunteer"];
const iam_length = iam.length;

// Allowable ASCII values
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
        $("#ijl-menu-desktop > *").removeClass("active cyan darken-3");

        // Find where to go and how fast
        const destination = -$("nav").height();
        const duration    = Math.trunc(0.5 * Math.abs(destination - $(document).scrollTop()));
        
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
        const duration    = Math.trunc(0.5 * Math.abs(destination - $(document).scrollTop()));
        
        $("html, body").animate({"scrollTop": destination}, duration);
    });

    // Splash
    let str_previous = "", str_current = $("#who-am-i").text(), str_new;

    setInterval(() => {
        // Make sure that a new description appears
        do {
            str_new = iam[Math.floor(iam_length * Math.random())];

        } while (str_new === str_current || str_new === str_previous);

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

            if (i === 20) {
                // Display new text
                $("#who-am-i").text(str_new);

                // Update
                str_previous = str_current;
                str_current  = str_new;

                clearInterval(transition);
            }

        }, 25);

    }, 2500);

    // Video
    document.querySelector(".cover_video").playbackRate = 1.4;

    // Portfolio
    $(".parallax").parallax();
    $(".chips").material_chip();
});