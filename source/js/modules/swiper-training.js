import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const activateTrainingSlider = () => {
  const swiperTraining = new Swiper('.training__swiper', {
    modules: [Navigation],
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.training__button-next',
      prevEl: '.training__button-prev',
    },
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  });
  swiperTraining.update();
};

export { activateTrainingSlider };
