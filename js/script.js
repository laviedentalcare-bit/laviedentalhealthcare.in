const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function changeSlide(){

```
slides[currentSlide].classList.remove('active');

currentSlide++;

if(currentSlide >= slides.length){
    currentSlide = 0;
}

slides[currentSlide].classList.add('active');
```

}

setInterval(changeSlide, 5000);

window.addEventListener("scroll", () => {

```
const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

    navbar.style.background = "#013B34";

}else{

    navbar.style.background = "#012F29";

}
```

});
