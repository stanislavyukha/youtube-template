const swiper1 = new Swiper('.channel-slider-1', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.channel-button-next-1',
    prevEl: '.channel-button-prev-1',
  },
});

const swiper2 = new Swiper('.channel-slider-2', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
  },

  spaceBetween: 20,
  navigation: {
    nextEl: '.channel-button-next-2',
    prevEl: '.channel-button-prev-2',
  },
});

const swiper3 = new Swiper('.channel-slider-3', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.channel-button-next-3',
    prevEl: '.channel-button-prev-3',
  },
});

const searchMobileBtn = document.querySelector('.mobile-search');
const inputGroup = document.querySelector('.input-group');

searchMobileBtn.addEventListener('click', () => {
  inputGroup.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper1.destroy();
  swiper2.destroy();
  swiper3.destroy();
}
