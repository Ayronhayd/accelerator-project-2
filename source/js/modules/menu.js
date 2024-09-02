const pageBody = document.querySelector('.page-body');
const buttonBurger = document.querySelector('.menu__burger');
const listLink = document.querySelectorAll('.site-list__link');


const toggleMenu = () => {
  buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('menu__burger--js');
    pageBody.classList.toggle('page-body__lock-scroll');
  });
};


const closePressing = () => {
  listLink.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttonBurger.classList.remove('menu__burger--js');
      pageBody.classList.remove('page-body__lock-scroll');
    });
  });
};

export { toggleMenu, closePressing };
