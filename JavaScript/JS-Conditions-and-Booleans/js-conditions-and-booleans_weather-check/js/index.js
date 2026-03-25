// Change this value to test different "weather" conditions.
const weather = "sunny";

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (weather) {
  case "rainy":
    console.log("RAINY!!");
    break;
  case "sunny":
    if (temperature > 20) {
      console.log("Sunny and above 20!");
    } else {
      console.log("Sunny but under 20!");
    }

    break;
  case "cloudy":
    console.log("It's cloudy");
    break;
  case "snowy":
    if (temperature < 0) {
      console.log("It's freezing!");
    } else {
      console.log("it's snowing");
    }
    break;

  default:
    console.log("I did not quite get that.");
}
