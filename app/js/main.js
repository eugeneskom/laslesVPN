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
  });
  const swiper2 = new Swiper('.customers__feedback.swiper-container', {
    slidesPerView:3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


});