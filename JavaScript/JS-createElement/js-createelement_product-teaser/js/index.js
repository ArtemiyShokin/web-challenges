console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newArticle = document.createElement("article");
document.body.append(newArticle);
newArticle.classList.add("product");
newArticle.innerHTML = `<section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${name}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
            ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src= ${imageSrc}
            alt=""
          />
        </div>
      </section>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button" data-js="button">Buy</button>
      </footer>`;

const buttonListener = document.querySelector('[data-js="button"]');

buttonListener.addEventListener("click", () => {
  console.log(name, price);
});

// const newSection = document.createElement("section");
// const newTextContainer = document.createElement("div");
// const newH2 = document.createElement("h2");
// const newUL = document.createElement("ul");
// const newListicle = document.createElement("li");
// const newParagraph = document.createElement("p");
// const newImageContainer = document.createElement("div");
// const newImage = document.createElement("img");
// const newFooter = document.createElement("footer");
// const newSpan = document.createElement("span");
// const newButton = document.createElement("article");

// document.body.append(newArticle);
// newArticle.classList.add("product");

// newArticle.append(newSection);
// newSection.classList.add("product__body");

// newSection.append(newTextContainer);
// newTextContainer.classList.add("product__text-container");

// newTextContainer.append(newH2);
// newH2.classList.add("product__name");
// newH2.textContent = name;

// newArticle.append(newFooter);
// newFooter.classList.add("product__foter");
