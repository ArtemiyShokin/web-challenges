console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

const arrowGetCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

// console.log(arrowGetCurrentHour());

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
// console.log("Vector function result " + getVectorLength(2, 3, 4));

const arrowGetVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// console.log("Vector arrow function result " + arrowGetVectorLength(2, 3, 4));

function cleanInput(string) {
  return string.toLowerCase().trim();
}
// console.log(cleanInput("NORMALFUNCTION"));

const arrowCleanInput = (string) => string.toLowerCase().trim();

// console.log(arrowCleanInput("ARROWFLUCNTION"));
/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
// console.log(isOddAndSmall(8));

function functionIsOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
// console.log(functionIsOddAndSmall(8));

const add3 = (a, b, c) => a + b + c;

function longAdd3(a, b, c) {
  return a + b + c;
}

const repeat10 = (string) => string.repeat(10);
function longRepeat10(string) {
  return string.repeat(10);
}
