console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorContainer = document.querySelector('[data-js="error-container"]');

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("I'm an error message! You can't divide by zero, buddy!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorContainer.innerText = "";
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  try {
    const operation = event.target.operation.value;
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    errorContainer.innerText = error;
  }
});
