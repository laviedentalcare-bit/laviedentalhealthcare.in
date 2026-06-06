const slides = document.querySelectorAll('.hero-slide');

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 4000);

/* Header Scroll Effect */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(1,47,41,.95)";
        navbar.style.backdropFilter = "blur(12px)";

    } else {

        navbar.style.background = "#012F29";

    }

});
