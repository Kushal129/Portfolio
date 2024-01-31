
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



var typed = new Typed('#element', {
    strings: ['Kushal Pipaliya'],
    typeSpeed: 50,
    lifeLike: true,
    startDelay: 500,
    cursor: true,
});
var typed = new Typed('#element-p', {
    strings: ['Web Developer.', 'Ethical Hacker.', 'Web Designer', 'Web Developer.', 'Ethical Hacker.'],
    typeSpeed: 60,
    lifeLike: true,
    startDelay: 500,
    cursor: true,
});
var style = document.createElement('style');
style.innerHTML = '.typed-cursor { display: none; }';
document.head.appendChild(style);


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};