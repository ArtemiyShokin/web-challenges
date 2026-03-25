console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// SUPER_SECRET_PASSWORD === receivedPassword
//   ? console.log("!!!Welcome! You are logged in as Brunhilde1984.")
//   : console.log("!!!Access denied!");

// Part 2: Even / Odd
const number = 5;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("uneven number");
}

// Part 3: Hotdogs

const numberOfHotdogs = 200;

if (numberOfHotdogs < 5) {
  console.log("2 € per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50€ per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1€ per hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10€ per hotdog");
} else {
  console.log("error");
}

// Part 4: Daytime
const currentHour = 18;

let statement = "";

currentHour < 17
  ? (statement = "Still need to learn")
  : (statement = "Partytime!");

console.log(statement);
console.clear();

// Part 5: Greeting
const userName = "Max";

// const greeting = "Hello " + userName === "Klaus" ? "Coach" : userName + "!";
const greeting = userName === "Klaus" ? "Hello Coach" : "Hello " + userName;

console.log(greeting);
