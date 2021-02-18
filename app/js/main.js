$(function () {
  import Swiper from '../../node_modules/swiper/swiper';
  // import Swiper styles
  const swiper = new Swiper('.clients__list', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    speed: 400,
  });


  $('.plan__btn').on('click', function (e) {
    e.preventDefault();
    $('.plan__btn').removeClass('plan__btn--active');
    $(this).addClass('plan__btn--active');
    $('.plan__btn').parents('.plan__card').removeClass('plan__card--active');
    $(this).parents('.plan__card').addClass('plan__card--active');

  });





});