import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const activateGallerySlider = () => {
  const swiperAdv = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    enabled: true,
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        enabled: true,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 5,
        enabled: false,
      },
    },
  });
  swiperAdv.update();
};

export { activateGallerySlider };
