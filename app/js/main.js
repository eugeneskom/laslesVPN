

$(function () {

  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".modal__message");

    messageElement.textContent = message;
    messageElement.classList.remove("modal__message--success", "modal__message--error");
    messageElement.classList.add('modal__message--' + type);
  }

  function setInputError(inputElement, message) {
    inputElement.classList.add('modal__input--error');
    inputElement.parentElement.querySelector('.modal__input-error-message').textContent = message;
  }

  function clearInputError(inputElement) {
    inputElement.classList.remove('modal__input--error');
    inputElement.parentElement.querySelector('.modal__input-error-message').textContent = '';

  }


  const loginForm = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');

  document.querySelector('#linkCreateAccount').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('modal__form--hidden');
    createAccountForm.classList.remove('modal__form--hidden');
  })

  document.querySelector('#linkLogin').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('modal__form--hidden');
    createAccountForm.classList.add('modal__form--hidden');
  })

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    setFormMessage(loginForm, 'error', 'Invalid username/password combination')
  });

  document.querySelectorAll('.modal__input').forEach(inputElement => {
    inputElement.addEventListener('blur', e => {
      if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10) {
        setInputError(inputElement, 'Username must be at least 10 characters in length');
      }
    });

    inputElement.addEventListener('input', e => {
      clearInputError(inputElement);
    })
  });


  let modal = document.querySelector('.modal');
  let modalForms = document.querySelectorAll('.modal__form');

  document.addEventListener("click", (e) => {

    if (e.target.classList.contains('modal')) {
      modal.style.display = 'none';
    } else if (e.target.classList.contains('header__connect-btn--login')) {
      e.preventDefault();
      modal.style.display = 'flex';
      modalForms[0].style.display = 'block';
      modalForms[1].style.display = 'none';
    } else if (e.target.classList.contains('header__connect-btn--signup')) {
      e.preventDefault();
      modal.style.display = 'flex';
      modalForms[0].style.display = 'none';
      modalForms[1].style.display = 'block';
    } else if (e.target.classList.contains('modal__link--login')) {
      modalForms[0].style.display = 'none';
      modalForms[1].style.display = 'block';
    } else if (e.target.classList.contains('modal__link--signup')) {
      modalForms[0].style.display = 'block';
      modalForms[1].style.display = 'none';
    }

  });

  ////////////////////////////////

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