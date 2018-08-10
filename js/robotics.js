// ⟁ \\

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
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
    }
  }
}
window.onload = init;


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
}
// page-scroll
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

//###############################################################
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License. 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * TERMS OF USE - jQuery Easing
 * Open source under the BSD License. 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",

  easeInOutExpo: function(e, f, a, h, g) {
    if (f == 0) {
      return a
    }
    if (f == g) {
      return a + h
    }
    if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a
    }
    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
  }
});
//###############################################################
