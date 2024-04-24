/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name : Kudi | Business html5 responsive template
 * Template URL :
 * Author : wpthemeshaper
 * Version : 1.0
 *
 * ---------------------------------------------------------------------------
 *
 */

(function ($) {
  'use strict';
  var $rtl = false;
  if ($('body').hasClass('rtl')) {
    $rtl = true;
  }
  /*------------------------------------------
        = Hide Loading Box (Preloader)
    -------------------------------------------*/

  $('.vc_tta-panel').removeClass('vc_active');
  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500);
    }
  }

  /*------------------------------------------
        = Update Scroll to Top
    -------------------------------------------*/

  function headerStyle() {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $('.main-header');
      var scrollLink = $('.scroll-to-top');
      if (windowpos > 1) {
        siteHeader.addClass('fixed-header');
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  // header function
  $('.menu-icon').on('click', function () {
    console.log('on click');
    const x = document.getElementById('menu-bar');
    const menu = document.getElementById('menu-icon');
    const cross = document.getElementById('cross-icon');

    if (x && menu && cross) {
      if (x.style.display === 'block') {
        menu.style.display = 'block';
        x.style.display = 'none';
        cross.style.display = 'none';
      } else {
        x.style.display = 'block';
        cross.style.display = 'block';
        menu.style.display = 'none';
      }
    }
  });

  /*------------------------------------------
        = Submenu Dropdown Toggle
    -------------------------------------------*/

  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append(
      '<div class="dropdown-btn"><span class="icofont icofont-navigation-menu"></span></div>'
    );

    //Dropdown Button
    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function (e) {
      e.preventDefault();
    });
  }
  $('#dynamic_select').on('change', function () {
    var url = $(this).val(); // get selected value
    if (url) {
      // require a URL
      window.location = url; // redirect
    }
    return false;
  });

  /*------------------------------------------
        = RTL Check
    -------------------------------------------*/
  function rtlcheck() {
    if ($('html').attr('dir') == 'rtl') {
      return true;
    } else {
      return false;
    }
  }

  /*------------------------------------------
        = Client Logo
    -------------------------------------------*/

  $('.clients-slider-1').owlCarousel({
    loop: true,
    rtl: $rtl,
    items: 1,
    dots: false,
    nav: false,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 0,
    autoplay: true,
    slideSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1100: {
        items: 1,
        nav: false,
      },
    },
  });

  $('.four-item-carousel').owlCarousel({
    loop: true,
    rtl: $rtl,
    items: 1,
    dots: false,
    nav: false,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 0,
    autoplay: true,
    slideSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      1100: {
        items: 4,
        nav: false,
      },
    },
  });

  $('.two-item-carousel').owlCarousel({
    loop: true,
    rtl: $rtl,
    items: 1,
    dots: true,
    nav: false,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 30,
    autoplay: true,
    slideSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      1100: {
        items: 2,
        nav: false,
      },
    },
  });
  /* ---------------------------------------------
        Clients SliderThree Column
     --------------------------------------------- */

  if ($('.clients-slider').length) {
    $('.clients-slider').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 50,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: 5000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  $('#name_text').on('input', function () {
    var input = $(this);
    var val = input.val();

    var $ajax = $('#search_form').attr('action');
    if (val) {
      $('#loader_').show();
      jQuery.ajax({
        type: 'POST',
        url: $ajax,
        data: 'title=' + val + '&do=get_names',
        success: function (data) {
          document.getElementById('search_result').innerHTML = '';

          document.getElementById('search_result').innerHTML = data;
          $('#loader_').hide();
        },
      });
    }
  });

  /* ---------------------------------------------
        = Owl Carousel 2 items
     --------------------------------------------- */

  if ($('.carousel-col-2').length) {
    $('.carousel-col-2').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 30,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        750: {
          items: 2,
        },
        960: {
          items: 2,
        },
        1170: {
          items: 3,
        },
        1300: {
          items: 3,
        },
      },
    });
  }

  /* ---------------------------------------------
        = Owl Carousel 2 items
     --------------------------------------------- */

  if ($('.carousel-col-21').length) {
    $('.carousel-col-21').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 30,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        750: {
          items: 2,
        },
        960: {
          items: 2,
        },
        1170: {
          items: 2,
        },
        1300: {
          items: 2,
        },
      },
    });
  }

  /* ---------------------------------------------
        = Owl Carousel 3 items
     --------------------------------------------- */

  if ($('.carousel-col-3').length) {
    $('.carousel-col-3').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 50,
      nav: false,
      dots: true,
      smartSpeed: 3500,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        750: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1170: {
          items: 1,
        },
        1300: {
          items: 1,
        },
      },
    });
  }

  /* ---------------------------------------------
        = Owl Carousel 5 items
     --------------------------------------------- */

  if ($('.carousel-col-5').length) {
    $('.carousel-col-5').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 10,
      nav: false,
      dots: true,
      smartSpeed: 500,
      autoplay: 5000,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        750: {
          items: 3,
        },
        960: {
          items: 3,
        },
        1170: {
          items: 5,
        },
        1300: {
          items: 5,
        },
      },
    });
  }

  /* ---------------------------------------------
        = Light Box
     --------------------------------------------- */

  if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      helpers: {
        media: {},
      },
    });
  }
  /*if($('[data-fancybox="gallery"]').length) {
	$('[data-fancybox="gallery"]').fancybox({});
	}*/

  /* ---------------------------------------------
        = Scroll to a Specific Div
     --------------------------------------------- */

  if ($('.scroll-to-target').length) {
    $('.scroll-to-target').on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /* ---------------------------------------------
        = Progressing Bar
     --------------------------------------------- */

  if ($('.progress-levels .progress-box .bar-fill').length) {
    $('.progress-box .bar-fill').each(function () {
      var progressWidth = $(this).attr('data-percent');
      $(this).css('width', progressWidth + '%');
      $(this)
        .parents('.progress-box')
        .children('.percent')
        .html(progressWidth + '%');
    });
  }

  /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/

  if ($('.fun-fact').length) {
    $('.counter').appear();

    $(document.body).on('appear', '.counter', function (e) {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  /* ---------------------------------------------
        = Wow Animation
     --------------------------------------------- */

  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ---------------------------------------------
        = portfolio filter set active class
     --------------------------------------------- */

  $('.portfolio-filter li').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  /* ---------------------------------------------
        = portfolio masonry
     --------------------------------------------- */

  $(window).load(function () {
    var $c = $('.portfolio-masonry');
    if (typeof imagesLoaded === 'function') {
      imagesLoaded($c, function () {
        setTimeout(function () {
          $c.isotope({
            itemSelector: '.portfolio-item',
            resizesContainer: false,
            layoutMode: 'masonry',
            filter: '*',
          });
        }, 500);
      });
    }
  });

  /* ---------------------------------------------
        = portfolio gallery
     --------------------------------------------- */

  $('.portfolio-gallery').each(function () {
    // the containers for all your galleries
    $(this)
      .find('.popup-gallery,.popup-gallery2')
      .magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
  });

  /* ---------------------------------------------
        = portfolio filtering
     --------------------------------------------- */

  $('.portfolio-filter').on('click', 'a', function () {
    $('#filters button').removeClass('current');
    $(this).addClass('current');
    var filterValue = $(this).attr('data-filter');
    $(this).parents('.portfolio-filter-item').next().isotope({ filter: filterValue });
  });

  /* ---------------------------------------------
        = popup link
     --------------------------------------------- */

  if ($('.popup-link').length) {
    $('.popup-link').magnificPopup({
      type: 'image',
    });
  }

  /* ---------------------------------------------------------------------------
	    = Paralex Backgrounds
	* --------------------------------------------------------------------------- */

  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
  if (!isMobileWebkit && jQuery(window).width() >= 768) {
    $.stellar({
      horizontalScrolling: false,
      responsive: true,
    });
  }

  // Parallax background
  function bgParallax() {
    if ($('.parallax').length) {
      $('.parallax').each(function () {
        var height = $(this).position().top;
        var resize = height - $(window).scrollTop();
        var doParallax = -(resize / 5);
        var positionValue = doParallax + 'px';
        var img = $(this).data('bg-image');

        $(this).css({
          backgroundImage: 'url(' + img + ')',
          backgroundPosition: '50%' + positionValue,
          backgroundSize: 'cover',
        });
      });
    }
  }

  /* ---------------------------------------------
        = Full Screen
    ---------------------------------------------- */

  if ($('.fullScreen').length) {
    $('.fullScreen').css({ height: $(window).height() + 'px' });
    $(window).resize(function () {
      $('.fullScreen').css({ height: $(window).height() + 'px' });
    });
  }

  /*------------------------------------------
        = Time Countdown
    -------------------------------------------*/

  if ($('.time-countdown').length) {
    $('.time-countdown').each(function () {
      var Self = $(this);
      var countDate = Self.data('countdown-time'); // getting date

      Self.countdown(countDate, function (event) {
        $(this).html(
          '<li> <div class="box"> <span class="days">' +
            event.strftime('%D') +
            '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' +
            event.strftime('%H') +
            '</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' +
            event.strftime('%M') +
            '</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' +
            event.strftime('%S') +
            '</span> <span class="timeRef">seconds</span> </div> </li>'
        );
      });
    });
  }

  // number counter
  $('.count').each(function () {
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString());
          },
        }
      );
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on('scroll', function () {
    headerStyle();
    bgParallax();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */
  $(window).load(function () {
    handlePreloader();
    bgParallax();
  });

  // Single Item Carousel
  if ($('.single-item-carousel').length) {
    $('.single-item-carousel').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  //Three Item Carousel
  if ($('.three-item-carousel').length) {
    $('.three-item-carousel').owlCarousel({
      loop: true,
      rtl: $rtl,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
  var inputs = document.querySelectorAll('.inputfile');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace(
          '{count}',
          this.files.length
        );
      else fileName = e.target.value.split('\\').pop();

      if (fileName) label.querySelector('span').innerHTML = fileName;
      else label.innerHTML = labelVal;
    });

    // Firefox bug fix
    input.addEventListener('focus', function () {
      input.classList.add('has-focus');
    });
    input.addEventListener('blur', function () {
      input.classList.remove('has-focus');
    });
  });
})(window.jQuery);
