import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const activateToursSlider = () => {
  const swiperTours = new Swiper('.tours__swiper', {
    modules: [Navigation],
    loop: false,
    spaceBetween: 18,
    navigation: {
      nextEl: '.tours__button-next',
      prevEl: '.tours__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  swiperTours.update();
};

export { activateToursSlider };
