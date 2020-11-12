/*---- GALLERY ----*/
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("grid-items");
   
  for (i = 0; i < slides.length; i++)
    {
      slides[i].style.display = "none";
    }
  for (i = 0; i < dots.length; i++)
    {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*---- STICKY MENU ----*/
window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var d = document.getElementById("nav-bar");
  if (scrolled > 200.867) d.setAttribute("class", "fix");
  else d.setAttribute("class", "not-fix");
}