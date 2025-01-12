import { Component } from "./node";
import "../assets/sass/keyboard.scss";

const easy = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const medium = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const hard = [...easy, ...medium];

export class Keyboard extends Component {
  constructor({ className, difficulty }) {
    super({ tag: "div", className: `keyboard ${className}` });
    this.difficulty = difficulty;
    this.key = [];
    if (this.difficulty === "easy") {
      easy.forEach((item) => {
        this.key.push(new Key({ key: item }));
      });
    }
    this.appendChildren(this.key);
  }
}

class Key extends Component {
  constructor({ className = "", key }) {
    super({ tag: "span", className: `key ${className}`, text: key });
    this.getNode().dataset.key = key;
  }
}
