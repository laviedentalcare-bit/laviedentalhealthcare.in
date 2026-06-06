window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "#013B34";

}else{

navbar.style.background = "#012F29";

}

});
