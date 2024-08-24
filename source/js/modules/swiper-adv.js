import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const activateAdvSlider = () => {
  const swiperAdv = new Swiper('.adv__swiper', {
    modules: [Navigation],
    enabled: false,

    navigation: {
      nextEl: '.adv__button-next',
      prevEl: '.adv__button-prev',
    },

    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        enabled: true,
        allowTouchMove: false,
        loop: true,
        // centeredSlides : true,
        // slidesPerGroup: 2,
      },
    },
  });
  swiperAdv.update();
};

export { activateAdvSlider };
