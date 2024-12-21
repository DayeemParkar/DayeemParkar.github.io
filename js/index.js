(
    function($) {
        "use strict";

        // Smooth scrolling
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (
                location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
                && location.hostname == this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: (target.offset().top)
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });

        // Responsive nav
        $(".js-scroll-trigger").click(
            function() {
                $(".navbar-collapse").collapse("hide");
            }
        );

        // Scrolling
        $("body").scrollspy(
            {
                target: "#sideNav"
            }
        );

    }
)(jQuery);

let slideIndex = 1;
const titles = [
    "<a href='https://github.com/DayeemParkar/StudentLearningCompanion'>Student Learning Companion</a>",
    "<a href='https://github.com/DayeemParkar/CSE3501ProjectDataLeakageDetection'>Data Leakage Detection Using A Probability Based Approach</a>",
    "<a href='https://github.com/DayeemParkar/Image-Steganography-Using-an-Edge-Based-Embedding-Technique'>Image Steganography Using an Edge Based Embedding Technique</a>"
];
const desc = [
    "Worked in a 4 person team to design a website for students and teachers to publicly share text notes, create study groups, create a weekly schedule etc.<br>Contributed in the saving of notes, creation of a search bar to easily find notes, implementation of group member validation and intra-group notes.<br><b>Languages, frameworks and tools used: HTML, CSS, PHP, MySQL, Bootstrap</b>",
    "Worked in a 2 person team to design a web application that lets users gain access to certain file(s) when the admin shares the key for the requested file(s) and if certain files have found to be leaked, it calculates the probability of a user leaking those files.<br>Created the implementation of the user login authentication, probability calculation for a leaked set of files and the implementation of admin sending the keys to the user that requests a file.<br><b>Languages and tools used: HTML, CSS, PHP, MySQL</b>",
    "Worked in a 3 person team to design a secure text encryption model using image steganography.<br>Implemented a custom embedding technique for masking text data in an image.<br><b>Languages and libraries used: Python, OpenCV</b>"
];

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-black";
    document.getElementById("projectTitles").innerHTML = titles[slideIndex - 1];
    document.getElementById("projectDesc").innerHTML = desc[slideIndex - 1];
}

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
