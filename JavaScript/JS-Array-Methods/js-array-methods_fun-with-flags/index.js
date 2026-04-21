import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');
// queryInput.addEventListener("input", (event) => {
//   container.innerHTML = "";

//   const searchString = event.target.value;
//   const caseInsensitive =
//     searchString.charAt(0).toUpperCase() + searchString.slice(1).toLowerCase();
//   console.log(caseInsensitive);

//   const foundCountry = countries.find(
//     (country) => country.name === caseInsensitive,
//   );

//   if (foundCountry) {
//     const countryElement = Country(foundCountry);
//     container.append(countryElement);
//   }
// });

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  const caseInsensitive =
    searchString.charAt(0).toUpperCase() + searchString.slice(1).toLowerCase();
  console.log(caseInsensitive);

  const foundCountries = countries.filter((country) =>
    country.name.startsWith(caseInsensitive),
  );

  foundCountries.forEach((country) => {
    const countryElement = Country(country);
    container.append(countryElement);
  });
});
