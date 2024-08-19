import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const activateReviewsSlider = () => {
  const swiperReviews = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
    breakpoints: {
      320: {
        initialSlide: 0,
      },
      768: {
        spaceBetween: 0,
      },
      1440: {
        spaceBetween: 82,
      },
    },
  });
  swiperReviews.update();
};

export { activateReviewsSlider };
