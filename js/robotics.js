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

// header
// $("header").addClass("shrink");

$(document).on("scroll", function() {
  // when scrolled 5 lines down
  if ($(document).scrollTop() > 5) {
    // the logo resizes to fit in the smaller header
    document.getElementById("logo").style.fontSize = "40px";
    // the header changes color from radient to blue
    document.getElementById("heading").style.background = "#303C88";
    // makes the header transparent
    // document.getElementById("heading").style.opacity = ".9";
    // removes the logo shadow
    document.getElementById("logo").style.textShadow = "none";
    // modes the hamburgercross to center on new header
    document.getElementById("hamburger").style.transform = "translateY(-5px)";
    // moving the logo to he left
    // document.getElementById("logo").style.textAlign = "left";
  } else {
    // for the default posiitons
    document.getElementById("logo").style.fontSize = "60px";
    document.getElementById("heading").style.background = "inherit";
    document.getElementById("logo").style.textShadow = "inherit";
    document.getElementById("hamburger").style.transform = "translateY(0px)";
    // document.getElementById("heading").style.opacity = "1";
    // document.getElementById("logo").style.textAlign = "center";
  }
});

// the sidebar
$(document).ready(function() {
  // when clicked on hamburger opens or closes overlay
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  // hamburger_cross
  trigger.click(function() {
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



// LQIP
// find element
const image = document.getElementsByTagName("img")[0];
// remove no-js attribute as we know js has been exectuted
image.removeAttribute("no-js");
// grab the image src before we rewrite it
const fullSrc = image.src;
// rewrite the image src with the placeholder base64 string
image.src = image.getAttribute("placeholder");
// create a new image
const fullImage = new Image();
// assign the saved src to the new image to preload it
fullImage.src = fullSrc;
// wait for the full image to load
fullImage.onload = function() {
  // add a small timeout to allow the transition when the image is already in memory
  setTimeout(() => {
    // replace the placeholder src with the full image src
    image.src = fullSrc;
    // remove the placeholder attribute to trigger the css transition
    image.removeAttribute("placeholder");
  }, 200);
};
