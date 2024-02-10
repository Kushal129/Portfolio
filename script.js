
document.getElementById("currentYear").innerText = new Date().getFullYear();

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



// var typed = new Typed('#element', {
//     strings: ['Kushal Pipaliya'],
//     typeSpeed: 50,
//     lifeLike: true,
//     startDelay: 500,
//     cursor: true,
// });
// var typed = new Typed('#element-p', {
//     strings: ['Web Developer.', 'Ethical Hacker.', 'Web Designer', 'Web Developer.', 'Ethical Hacker.'],
//     typeSpeed: 60,
//     lifeLike: true,
//     startDelay: 500,
//     cursor: true,
// });
// var style = document.createElement('style');
// style.innerHTML = '.typed-cursor { display: none; }';
// document.head.appendChild(style);


// loader 

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };


//   navabr 
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
                // Remove 'active' class from all links
                navLinks.forEach((navLink) => navLink.classList.remove("active"));

                // Add 'active' class to the current link
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Initial update on page load
});

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


function animateForm() {
    $('.contact-form input, .contact-form textarea').addClass('animate__animated animate__shakeX');

    setTimeout(function() {
        $('.contact-form input, .contact-form textarea').removeClass('animate__animated animate__shakeX');
    }, 1000);
}


const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navBar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.opacity = '1';
    mobileMenu.style.pointerEvents = 'auto';
});

closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.pointerEvents = 'none';
});