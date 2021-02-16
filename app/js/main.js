$(function () {
  
  $('.plan__btn').on('click', function(e){
    e.preventDefault();
    $('.plan__btn').removeClass('plan__btn--active');
    $(this).addClass('plan__btn--active');
    $('.plan__btn').parents('.plan__card').removeClass('plan__card--active');
    $('.plan__btn').parents('.plan__card').addClass('plan__card--active');

  });
  
});