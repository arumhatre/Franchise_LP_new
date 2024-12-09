
  $(document).ready(function () {
    
    /*** 1. Initialize YouTube/Vimeo Popups ***/
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });

    /*** 2. Scroll-Based Button Visibility Logic ***/
    $("#open-button").hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() === 0) {
        $("#open-button").hide();
      } else {
        $("#open-button").show();
      }
    });

    /*** 3. Open & Close Form Logic ***/
    window.openForm = function () {
      document.getElementById("myForm").style.display = "block";
      $("#myForm .myForm-top-form").append($(".form-top-new"));
      $(".contactFormHolder .contactForm").hide();
    };

    window.closeForm = function () {
      $(".contactFormHolder .contactForm").show();
      $(".contactFormHolder .contactForm").append($(".form-top-new"));
      document.getElementById("myForm").style.display = "none";
    };

    /*** 4. Initialize Testimonial Slider ***/
    $("#testimonilas_slider").owlCarousel({
      loop: false,
      responsiveClass: false,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='02 prev' width='40' height='40'>",
        "<img src='images/nextimage.webp' alt='02 next' width='40' height='40'>"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 2 }
      }
    });
    $(".owl-nav .owl-prev").attr("role", "button");
    $(".owl-nav .owl-next").attr("role", "button");

    /*** 5. Initialize Hair Type Slider ***/
    $(".clinic_slider").owlCarousel({
      responsiveClass: false,
      nav: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='02 prev' width='40' height='40'>",
        "<img src='images/nextimage.webp' alt='02 next' width='40' height='40'>"
      ],
      responsive: {
        0: { items: 1, loop: true },
        600: { items: 1, loop: true },
        768: { items: 3, loop: false },
        1024: { items: 3, loop: false },
        1200: { items: 3, loop: false }
      }
    });
    $(".owl-nav .owl-prev").attr("role", "button");
    $(".owl-nav .owl-next").attr("role", "button");

    /*** 6. Responsive Awards Carousel Logic ***/
    function initAwardsCarousel() {
      if ($(window).width() < 768) {
        $('.awards-carousel').removeClass('row').addClass('owl-carousel');
        if (!$('.awards-carousel').hasClass('owl-loaded')) {
          $('.awards-carousel').owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
              "<img src='images/previmage.webp' alt='Previous' width='40' height='40'>",
              "<img src='images/nextimage.webp' alt='Next' width='40' height='40'>"
            ]
          });
        }
      } else {
        if ($('.awards-carousel').hasClass('owl-loaded')) {
          $('.awards-carousel')
            .trigger('destroy.owl.carousel')
            .removeClass('owl-carousel owl-loaded');
          $('.awards-carousel').addClass('row');
        }
      }
    }

    initAwardsCarousel();
    $(window).on('resize', initAwardsCarousel);

  });

