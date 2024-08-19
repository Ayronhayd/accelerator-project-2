import { closePressing } from './modules/close-pressing';
import { activateHeroSlider } from './modules/swiper-hero';
import { activateToursSlider } from './modules/swiper-tours';
import { initTrainingSlider } from './modules/swiper-training';
import { activateReviewsSlider } from './modules/swiper-reviews';
// import { initAdvSlider } from './modules/swiper-adv';

closePressing();
activateHeroSlider();
activateToursSlider();
activateReviewsSlider();
// initAdvSlider();


// не смог понять что с нижним пожключением слайдера не так если он подключен раньше других-
// то все перестают работать
initTrainingSlider();

// const swiperOn = document.querySelector('.adv__wrapper-js');
// const swiperWrapperOn = document.querySelector('.adv__wrapper-js');
// swiperOn.classList.remove('swiper');
// swiperWrapperOn.classList.remove('swiper-wrapper');


// swiperOn.classList.add('swiper-wrapper');


// if (document.documentElement.clientWidth < 1439) {

// } else {

// };

