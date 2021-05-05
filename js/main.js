// aos


AOS.init({
  duration: 1000,
  once: true
});

(function ($) {

  'use strict';
  $('.site-menu-toggle').click(function () {
    var $this = $(this);
    if ($('body').hasClass('menu-open')) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(200);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(200);
      $('body').addClass('menu-open');
    }
  });

  var $root = $('html, body');

  $('a.smoothscroll[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
  });
  
  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText: ["<span class='icon-angle-circled-left'></span>", "<span class='icon-angle-circled-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='icon-angle-circled-left'></span>", "<span class='icon-angle-circled-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='icon-angle-circled-left'></span>", "<span class='icon-angle-circled-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  $(".animsition").animsition();

})(jQuery);
