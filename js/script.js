/* =========================
HERO IMAGE SLIDER
========================= */

const slides = document.querySelectorAll('.hero-slide');

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add('active');

}

setInterval(changeSlide, 4500);

/* =========================
HEADER EFFECT
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(1,47,41,.92)";

        navbar.style.backdropFilter =
        "blur(12px)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.background =
        "#012F29";

        navbar.style.boxShadow =
        "none";

    }

});

/* =========================
FADE IN ANIMATION
========================= */

window.addEventListener("load", () => {

    document.querySelector(".hero-left")
    .style.opacity = "1";

    document.querySelector(".hero-right")
    .style.opacity = "1";

});
