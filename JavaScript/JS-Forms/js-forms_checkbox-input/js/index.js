console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccess = document.querySelector('[data-js="success"]');

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}
function hideTosSuccess() {
  tosSuccess.setAttribute("hidden", "");
}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
hideTosSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);
  // // console.log(data);
  // console.log("TOS Value: " + event.target.elements.tos.checked);

  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }
  // eslint-disable-next-line no-alert
  hideTosError();
  alert("Form submitted");
  showTosSuccess();
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    console.log("button has been checked");
    hideTosError();
  } else {
    console.log("button has not been checked!");
    showTosError();
  }
});
