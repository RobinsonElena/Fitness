import Swiper from '../vendor/swiper';

const swiperCoach = document.querySelector('.coaches__slider');

const initSwiperCoach = () => {
  if (swiperCoach) {
    (() =>
      new Swiper('.coaches__slider', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            initialSlide: 0,
          },
        },
      })
    )();
  }
};

export {initSwiperCoach};
