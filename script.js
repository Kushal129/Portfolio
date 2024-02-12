// Set the current year in an element with id 'currentYear'
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Fade in elements when they become visible during scroll
document.addEventListener('scroll', function () {
    var fadeIns = document.querySelectorAll('.fade-in');

    fadeIns.forEach(function (fadeIn) {
        if (isElementVisible(fadeIn)) {
            fadeIn.classList.add('visible');
        }
    });
});

function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return !(rect.bottom < 0 || rect.top - windowHeight >= 0);
}

// Loader - show loader until the document is fully loaded
document.onreadystatechange = function () {
    var body = document.querySelector("body");
    var loader = document.querySelector("#loader");

    if (document.readyState !== "complete") {
        body.style.visibility = "hidden";
        loader.style.visibility = "visible";
    } else {
        loader.style.display = "none";
        body.style.visibility = "visible";
    }
};

// Navbar - update active link and apply styles on scroll
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        navLinks.forEach((link) => {
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (
                targetSection &&
                scrollPosition >= targetSection.offsetTop &&
                scrollPosition < targetSection.offsetTop + targetSection.offsetHeight
            ) {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});

// Change navbar style on scroll
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Animate form on button click
function animateForm() {
    $('.contact-form input, .contact-form textarea').addClass('animate__animated animate__shakeX');

    setTimeout(function () {
        $('.contact-form input, .contact-form textarea').removeClass('animate__animated animate__shakeX');
    }, 1000);
}

document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('hidden');
});

function handleFormSubmission(event) {
    console.log("Form submitted successfully");
    return true;  
}