const listLink = document.querySelectorAll('.site-list__link');
const buttonBurger = document.querySelector('.menu__burger');

const closePressing = () => {
  listLink.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttonBurger.classList.remove('menu__burger--js');
    });
  });
};

export { closePressing };
