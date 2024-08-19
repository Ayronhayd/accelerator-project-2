const listLink = document.querySelectorAll('.site-list__link');
const checkbox = document.querySelector('.menu__burger-checkbox');

const closePressing = () => {
  listLink.forEach((btn) => {
    btn.addEventListener('click', () => {
      checkbox.click();
    });
  });
};

export { closePressing };
