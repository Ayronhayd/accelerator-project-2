import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
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

// swiper
const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets'
  },
});
swiperHero.update();

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
    }
  },
});
swiperTours.update();

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
      spaceBetween: 100,
    },
  },
});
swiperReviews.update();


// в этом коде есть какай-то ошибка. если ниже подключить другой слайдер  то он будет не работать
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
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
    }
  },
});
swiperTraining.update();
