$(function () {



  $('.header__connect-btn').on('click', function (e) {
    e.preventDefault();
    $('.header__connect-btn').removeClass('header__connect-btn--active');
    $(this).addClass('header__connect-btn--active');

  });

  $('.plan__btn').on('click', function (e) {
    e.preventDefault();
    $('.plan__btn').removeClass('plan__btn--active');
    $(this).addClass('plan__btn--active');
    $('.plan__btn').parents('.plan__card').removeClass('plan__card--active');
    $(this).parents('.plan__card').addClass('plan__card--active');

  });

  $(".rateyo").rateYo({
    maxValue: 1,
    numStars: 1,
    rating: "90%",
    starWidth: "16px"
  });

  const swiper1 = new Swiper('.clients .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });
  const swiper2 = new Swiper('.customers__feedback.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: "4",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        loopedSlides: "2",
      },
      768: {
        loopedSlides: "2",
      },
      1300: {
        loopedSlides: "4",
      },
    }


  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('menu--column');
    $('.header__connect').toggleClass('header__connect--show');

  });


});