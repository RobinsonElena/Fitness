const swiperCoach = document.querySelector('.coaches__slider');

const initSwiperCoach = () => {
  if (swiperCoach) {
    (() =>
      new Swiper('.coaches__slider', { // eslint-disable-line
        direction: 'horizontal',
        loop: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        navigation: {
          nextEl: '.coaches__button--next',
          prevEl: '.coaches__button--prev',
        },
        maxBackfaceHiddenSlides: 0,
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
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
