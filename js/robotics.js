$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
$(document).on("scroll", function() {
  if ($(document).scrollTop() > 0) {
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.padding = "4px 0px 0px 0px";
    document.getElementById("heading").style.background = "#303C88";
    document.getElementById("heading").style.padding = "0";
    document.getElementById("login").style.padding = "5px 10px";
    document.getElementById("upload").style.padding = "5px 10px";
    document.getElementById("logo-sp").style.textShadow = "none";
    document.getElementById("hamburger").style.transform = "translateY(-12px)";
  } else {
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("logo").style.padding = "none";
    document.getElementById("heading").style.background = "inherit";
    document.getElementById("heading").style.padding = "10px";
    document.getElementById("login").style.padding = "10px 15px";
    document.getElementById("upload").style.padding = "10px 15px";
    document.getElementById("logo-sp").style.textShadow = "inherit";
    document.getElementById("hamburger").style.transform = "translateY(0px)";
  }
});
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
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
      imgDefer[i].style.animation = "unblur 1s ease";
      imgDefer[i].style.filter = "blur(0px)";
    }
  }
}
window.onload = init;
$( document ).ready(function() {
       $({property: 0}).animate({property: 105}, {
           duration:2000,
           step: function() {
               var _percent = Math.round(this.property);
               $('#progress').css('width',  _percent+"%");
               if(_percent == 105) {
                   $("#progress").addClass("done");
               }
           },
           complete: function() {
               $("#progress").hide();
           }
       });
   });
