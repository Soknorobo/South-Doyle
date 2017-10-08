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
  if ($(document).scrollTop() > 100) {
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("heading").style.background = "#303C88";
    // document.getElementById("heading").style.opacity = ".9";
    document.getElementById("logo").style.textShadow = "none";
    document.getElementById("hamburger").style.transform = "translateY(-5px)";
    // document.getElementById("logo").style.textAlign = "left";
  } else if ($(document).scrollTop() < 5) {
    document.getElementById("logo").style.fontSize = "60px";
    document.getElementById("heading").style.background = "inherit";
    document.getElementById("logo").style.textShadow = "inherit";
  } else {
    // document.getElementById("heading").style.opacity = "1";
    document.getElementById("hamburger").style.transform = "translateY(0px)";
    // document.getElementById("logo").style.textAlign = "center";
  }
});

// the sidebar
$(document).ready(function() {
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;


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
