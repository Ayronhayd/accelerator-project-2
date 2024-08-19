import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initAdvSlider = () => {
  const swiperAdv = new Swiper('.adv__swiper', {
    modules: [Navigation],
    enabled: false,
    loop: false,
    navigation: {
      nextEl: '.adv__button-next',
      prevEl: '.adv__button-prev',
    },

    // breakpoints: {
    //   1440: {
    //     enabled: true,
    //   },
    // },
  });
  swiperAdv.update();
};

export { initAdvSlider };
