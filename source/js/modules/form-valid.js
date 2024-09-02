const formValid = () => {

  const EMAIL_VALID = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9._%+-]+@[\w-]+(?:\.[\w-]+)*$/;
  const PHONE_VALID = /^\d+$/;
  const form = document.querySelector('.form__form');
  const emailInput = form.querySelector('.form__input--email');
  const phoneInput = form.querySelector('.form__input--phone');
  const validInput = (input, regex) => {
    const isValid = regex.test(input.value);
    input.classList.toggle('form__input--error', !isValid);
    return isValid;
  };
  form.addEventListener('submit', (event) => {
    const isEmailValid = validInput(emailInput, EMAIL_VALID);
    const isPhoneValid = validInput(phoneInput, PHONE_VALID);
    if (!isEmailValid || !isPhoneValid) {
      event.preventDefault();
    }
  });
};

export { formValid };
