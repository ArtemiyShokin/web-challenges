console.clear();

const formInput = document.querySelector('[data-js="first-input"]');
const buttonSubmit = document.querySelector('[data-js="button-uppercase"]');

buttonSubmit.addEventListener("click", () => {
  const upperCase = formInput.value.toUpperCase();
  formInput.value = upperCase;
});
