
document.getElementById("currentYear").innerText = new Date().getFullYear();

document.addEventListener('scroll', function () {
    var fadeIns = document.querySelectorAll('.fade-in');
    var custForm = document.querySelector('.cust');

    fadeIns.forEach(function (fadeIn) {
        if (isElementVisible(fadeIn)) {
            fadeIn.classList.add('visible');
        }
    });
    if (isElementVisible(custForm)) {
        custForm.classList.add('animate__animated', 'animate__shakeX');
    }
});

function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return !(rect.bottom < 0 || rect.top - windowHeight >= 0);
}

document.onreadystatechange = function () {
    var body = document.querySelector("body");
    var loader = document.querySelector("#loader");

    if (document.readyState !== "complete") {
        body.style.visibility = "hidden";
        loader.style.display = "block";
    } else {
        loader.style.display = "none";
        body.style.visibility = "visible";
    }
};


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

    setTimeout(function () {
        $('.contact-form input, .contact-form textarea').removeClass('animate__animated animate__shakeX');
    }, 1000);
}

document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('hidden');
});

const toggleSwitch = document.querySelector('#dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme === 'dark') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = true;
} else {
    document.body.classList.add('dark-mode');
}

toggleSwitch.addEventListener('change', switchTheme);

// toaster
var toaster = document.getElementById('toaster');
var message = document.getElementById('toast-message');
var form = document.getElementById("my-form");
var submitButton = form.querySelector("button[type='submit']");
toaster.classList.add('hidden');

function showToaster(str) {
    message.innerText = str || "Success! Your message has been sent.";
    toaster.classList.remove('hidden');
    toaster.classList.add('visible');
    setTimeout(function () {
        toaster.classList.remove('visible');
        toaster.classList.add('hidden');
    }, 5000);
}

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showToaster("Thanks for Contacting. We Will Contact You Soon..!");
            form.reset();
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// -----------------------------  buttton download resume   ------------------------------------

const button = document.getElementById("buttondwn");
const arrow = document.getElementById("arrow");
const progress = document.getElementById("progress");
const check = document.getElementById("check");
const downloadLink = document.getElementById("downloadLink");

let loadingTime = 800;
let blocked = false;

button.addEventListener("click", () => {
    if (blocked) return;
    blocked = true;

    arrow.classList.add("animate-down");

    let percent = 0;
    let load = setInterval(() => {
        percent++;
        progress.style.height = percent + "%";
    }, loadingTime / 100);

    setTimeout(() => {
        clearInterval(load);

        setTimeout(() => {
            progress.classList.remove("bg-opacity-20");
            progress.classList.add("bg-opacity-0");
            check.classList.remove("w-0");
            check.classList.add("w-5");

            setTimeout(() => {
                check.classList.add("w-0");
                check.classList.remove("w-5");
                setTimeout(() => {
                    reset();
                    downloadFile();
                }, 1000);
            }, 1000);
        }, 500);
    }, loadingTime);
});

function downloadFile() {
    downloadLink.click();
}


// ----------------------------------------------------------------------------------------


function reset() {
    progress.style.height = "0%";
    arrow.classList.remove("animate-down");

    setTimeout(() => {
        progress.classList.remove("bg-opacity-0");
        progress.classList.add("bg-opacity-20");
        blocked = false;
    }, 200)
}

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const homeSectionHeight = document.getElementById('home-section').offsetHeight;
    const scrollToTopButton = document.getElementById('scroll-to-top');

    if (scrollPosition >= homeSectionHeight) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});