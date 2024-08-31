const buttonBurger = document.querySelector('.menu__burger');

const toggleMenu = () => {
  buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('menu__burger--js');
  });
};

export { toggleMenu };
