console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let counter = 1; counter < 6; counter++) {
    if (counter > filledStars) {
      const newFilledStar = document.createElement("img");
      newFilledStar.src = "assets/star-empty.svg";
      newFilledStar.addEventListener("click", () => {
        renderStars(counter);
      });
      starContainer.append(newFilledStar);
    } else {
      const newStar = document.createElement("img");
      newStar.src = "assets/star-filled.svg";
      newStar.addEventListener("click", () => {
        renderStars(counter);
      });
      starContainer.append(newStar);
    }
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
