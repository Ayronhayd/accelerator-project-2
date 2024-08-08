// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

// закрытие при нажатии на сылку
const magicLink = document.querySelectorAll('.site-list__link');
const checkbox = document.querySelector('.menu__burger-checkbox');

magicLink.forEach((btn) => {
  btn.addEventListener('click', () => {
    checkbox.click();
  });
});
