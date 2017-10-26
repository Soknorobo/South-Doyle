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
  if ($(document).scrollTop() > 0) {
    // the logo resizes to fit in the smaller header
    document.getElementById("logo").style.fontSize = "35px";
    // the header changes color from radient to blue
    document.getElementById("heading").style.background = "#303C88";
    document.getElementById("heading").style.padding = "0";
    document.getElementById("login").style.padding = "5px";
    // makes the header transparent
    // document.getElementById("heading").style.opacity = ".9";
    // removes the logo shadow
    document.getElementById("logo-sp").style.textShadow = "none";
    // modes the hamburgercross to center on new header
    document.getElementById("hamburger").style.transform = "translateY(-12px)";
    // moving the logo to he left
    // document.getElementById("logo").style.textAlign = "left";
  } else {
    // for the default posiitons
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("heading").style.background = "inherit";
    document.getElementById("heading").style.padding = "10px";
    document.getElementById("login").style.padding = "10px";
    document.getElementById("logo-sp").style.textShadow = "inherit";
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
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;


function clock(){
  //Save the times in variables
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  //Set the AM or PM time
  if (hours >= 12){
    meridiem = " PM";
  }
  else {
    meridiem = " AM";
  }
  //convert hours to 12 hour format and put 0 in front
  if (hours>12){
  	hours = hours - 12;
  }
  else if (hours===0){
  	hours = 12;
  }
  //Put 0 in front of single digit minutes and seconds
  if (minutes<10){
  	minutes = "0" + minutes;
  }
  else {
  	minutes = minutes;
  }
  if (seconds<10){
  	seconds = "0" + seconds;
  }
  else {
  	seconds = seconds;
  }
  document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);
}
setInterval('clock()', 1000);
