console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  console.log("add button clicked");
  const newToastMessage = document.createElement("li");
  toastContainer.append(newToastMessage);
  toastContainer.classList.add("toast-container__message");
  const textInput = "Hello I'm toast.";
  newToastMessage.textContent = textInput;
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
