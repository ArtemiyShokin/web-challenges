console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // prevents a reload of the collected data
  const formData = new FormData(event.target);
  // creates a variable that takes all the data from the form
  const readableData = Object.fromEntries(formData);
  // turns it into a readable (to me) js object
  console.log(readableData);
  console.log("Age value: " + event.target.elements.age.value);
  console.log("Badness value: " + event.target.elements.badness.value);
  const ageBadnessSum =
    Number(event.target.elements.age.value) +
    Number(event.target.elements.badness.value);
  console.log(
    `The age-badness-sum of ${event.target.elements.firstName} is ${ageBadnessSum}`,
  );
  event.target.reset();
  // clears the form (AFTER i logged the data!)
  event.target.elements.firstName.focus();
  // focuses on the firstName name attribute
});
