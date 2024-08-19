import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const activateHeroSlider = () => {
  const swiperHero = new Swiper('.hero__swiper', {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.hero__pagination',
      clickable: true,
      type: 'bullets',
    },
  });
  swiperHero.update();
};

export { activateHeroSlider };
