import { closePressing } from './modules/close-pressing';
import { activateHeroSlider } from './modules/swiper-hero';
import { activateToursSlider } from './modules/swiper-tours';
import { activateTrainingSlider } from './modules/swiper-training';
import { activateReviewsSlider } from './modules/swiper-reviews';
import { activateAdvSlider } from './modules/swiper-adv';
import { toggleSwiper } from './modules/toggle-swiper';
import { activateGallerySlider } from './modules/swiper-gallery';

closePressing();
activateHeroSlider();
activateToursSlider();
activateReviewsSlider();
activateAdvSlider();
activateGallerySlider();


onload = function() {
  toggleSwiper();
};

window.onresize = function() {
  toggleSwiper();
};

// не смог понять что с нижним пожключением слайдера не так если он подключен раньше других-
// то все перестают работать

activateTrainingSlider();
