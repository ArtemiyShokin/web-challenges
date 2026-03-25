const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
let output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  let age = Number(input.value);
  if (age < 18) {
    console.log("teen");
    output.innerHTML = "Teen";
  } else {
    console.log("not a teen");
    output.innerHTML = "Not a Teen";
  }
  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
