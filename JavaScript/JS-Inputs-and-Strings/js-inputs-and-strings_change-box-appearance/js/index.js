console.clear();

const boxElement = document.querySelector('[data-js="box"]');

const colorSlider = document.querySelector('[data-js="input-color"]');

const borderSlider = document.querySelector('[data-js="input-radius"]');

const rotationSlider = document.querySelector('[data-js="input-rotation"]');

colorSlider.addEventListener("input", () => {
  boxElement.style.background = `hsl(${colorSlider.value}, 100%, 50%)`;
});

borderSlider.addEventListener("input", () => {
  boxElement.style.borderRadius = `${borderSlider.value}%`;
});

rotationSlider.addEventListener("input", () => {
  boxElement.style.transform = `rotate(${rotationSlider.value}deg)`;
});
