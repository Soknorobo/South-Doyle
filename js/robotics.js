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


// touch
//
//
