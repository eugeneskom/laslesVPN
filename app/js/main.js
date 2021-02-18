$(function () {
  

  const swiper = new Swiper('.clients__list', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    speed: 400,
  });
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





});