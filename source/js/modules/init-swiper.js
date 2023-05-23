const swiperCoach = document.querySelector('.coaches__slider');

const initSwiperCoach = () => {
  if (swiperCoach) {
    (() =>
      new Swiper('.coaches__slider', { // eslint-disable-line
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.coaches__button--next',
          prevEl: '.coaches__button--prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            initialSlide: 2,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            initialSlide: 2,
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

const swiperReview = document.querySelector('.reviews__slider');

const initSwiperReview = () => {
  if (swiperReview) {
    (() =>
      new Swiper('.reviews__slider', { // eslint-disable-line
        direction: 'horizontal',
        loop: false,

        navigation: {
          nextEl: '.reviews__button--next',
          prevEl: '.reviews__button--prev',
        },
      })
    )();
  }
};

export {initSwiperCoach, initSwiperReview};
