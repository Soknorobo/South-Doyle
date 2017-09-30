//
// ?
// This contains all the extra javascript
// ?
// tooltip javascript, creates tooltip
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// adjust the carousel speed
// // carousel speed javascript
// $(document).ready(function() {
//     $('.carousel').carousel({
//       interval: 1500
//     })
//   });


// the sidebar
$(document).ready(function() {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;


  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function() {
    $('#wrapper').toggleClass('toggled');
  });
});




// gallery slideshow
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// prev and next button function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener("keyup",function(e){
   var key = e.which||e.keyCode;
   switch(key){
      //left arrow
      case 37:
         document.getElementById("prev").click();
      break;
      //right arrow
      case 39:
         document.getElementById("next").click();
      break;
   }
});



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// touch
document.addEventListener('touchstart', function addtouchclass(e){ // first time user touches the screen
    document.documentElement.classList.add('is-touch') // add "can-touch" class to document root using classList API
    document.removeEventListener('touchstart', addtouchclass, false) // de-register touchstart event
}, false)
// scroll

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
