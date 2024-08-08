import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
// Navigation,
// закрытие при нажатии на сылку
const magicLink = document.querySelectorAll('.site-list__link');
const checkbox = document.querySelector('.menu__burger-checkbox');

magicLink.forEach((btn) => {
  btn.addEventListener('click', () => {
    checkbox.click();
  });
});


const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets'
  },
});

swiperHero.update();
