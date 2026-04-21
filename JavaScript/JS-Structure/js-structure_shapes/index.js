console.clear();
import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./utils/Circle.js";
import Square from "./utils/Square.js";
import Pentagon from "./utils/Pentagon.js";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
