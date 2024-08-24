const form = document.querySelector('.form__form');
const nameInput = form.querySelector('.form__input--name');
const nameError = form.querySelector('.form__error-name');
const phoneInput = form.querySelector('.form__input--phone');
const phoneError = form.querySelector('.form__error-phone');
const NAME_VALID = /^[a-zA-Zа-яА-ЯЁё\s]+$/;
const PHONE_VALID = /^\+\d/;


const validateInput = (input, regex, error) => {
  const isValid = regex.test(input.value);
  error.style.display = isValid ? 'none' : 'block';
  input.classList.toggle('form__input--error', !isValid);
  return isValid;
};

form.addEventListener('submit', (e) => {
  const nameValid = validateInput(nameInput, NAME_VALID, nameError);
  const phoneValid = phoneInput.value ? validateInput(phoneInput, PHONE_VALID, phoneError) : true;
  if (!nameValid || !phoneValid) {
    e.preventDefault();
  }
});
