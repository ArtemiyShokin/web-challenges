import App from "./utils/app.js";
import Header from "./utils/header.js";
import Form from "./utils/form-creation.js";
import CardList from "./utils/cardList.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
