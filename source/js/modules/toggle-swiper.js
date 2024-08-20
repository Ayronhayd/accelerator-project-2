const swiperWrapper = document.querySelector('.adv__wrapper');

function toggleSwiper() {

  const width = window.innerWidth;

  if(width < 1440) {
    swiperWrapper.classList.remove('swiper-wrapper');
  } else {
    // если больше
    swiperWrapper.classList.add('swiper-wrapper');
  }
}

export { toggleSwiper };
