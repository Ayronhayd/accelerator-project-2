import { toggleMenu, closePressing } from './modules/menu';
import { activateHeroSlider } from './modules/swiper-hero';
import { activateToursSlider } from './modules/swiper-tours';
import { activateTrainingSlider } from './modules/swiper-training';
import { activateReviewsSlider } from './modules/swiper-reviews';
import { activateAdvSlider } from './modules/swiper-adv';
import { toggleSwiper } from './modules/toggle-swiper';
import { activateGallerySlider } from './modules/swiper-gallery';
import { formValid } from './modules/form-valid';


toggleMenu();
closePressing();
activateHeroSlider();
activateToursSlider();
activateTrainingSlider();
activateReviewsSlider();
activateAdvSlider();
activateGallerySlider();
formValid();

onload = function() {
  toggleSwiper();
};

window.onresize = function() {
  toggleSwiper();
};
