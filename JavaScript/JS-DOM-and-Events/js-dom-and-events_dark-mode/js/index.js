console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
  console.log("Dark Button Press");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("button--dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("button--dark");
});
