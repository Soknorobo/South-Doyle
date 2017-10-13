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
    document.getElementById("logo").style.fontSize = "25px";
    // the header changes color from radient to blue
    document.getElementById("heading").style.background = "#303C88";
    // makes the header transparent
    document.getElementById("heading").style.opacity = ".9";
    // removes the logo shadow
    document.getElementById("logo").style.textShadow = "none";
    // modes the hamburgercross to center on new header
    document.getElementById("hamburger").style.transform = "translateY(-12px)";
    // moving the logo to he left
    // document.getElementById("logo").style.textAlign = "left";
  } else {
    // for the default posiitons
    document.getElementById("logo").style.fontSize = "60px";
    document.getElementById("heading").style.background = "inherit";
    document.getElementById("logo").style.textShadow = "inherit";
    document.getElementById("hamburger").style.transform = "translateY(0px)";
    document.getElementById("heading").style.opacity = "1";
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
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;
