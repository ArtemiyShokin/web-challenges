import Header from "./utils/header.js";
import Form from "./utils/form-creation.js";
import CardList from "./cardList.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
