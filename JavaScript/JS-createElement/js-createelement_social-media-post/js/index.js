console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newArticle = document.createElement("article");
const newParagraph = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

document.body.append(newArticle);
newArticle.classList.add("post");

newArticle.append(newParagraph);
newParagraph.classList.add("post__content");
newParagraph.textContent = "Hello There Lorem Dimsum Hendrik  Ibsen.";

newArticle.append(newFooter);
newFooter.classList.add("post__footer");

newFooter.append(newSpan);
newSpan.classList.add("post__username");
newSpan.textContent = "@belkathedog";

newFooter.append(newButton);
newButton.classList.add("post__button");
newButton.textContent = "♥ Love";
newButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to tsshe body.
