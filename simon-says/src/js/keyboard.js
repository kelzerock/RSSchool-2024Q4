import { Component } from "./node";
import "../assets/sass/keyboard.scss";
import { playBox } from "./playBox";
import { KEY_CODE } from "../constant/constant";

const keyboardInstance = {
  easy: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  medium: [
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
  ],
  hard: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
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
  ],
};
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
  constructor({ className = "", difficulty }) {
    super({ tag: "div", className: `keyboard ${className}` });
    this.difficulty = difficulty;
    this.key = [];

    this.createKeyboard(this.difficulty);
  }

  addDisabledClass() {
    this.getChildren().forEach((item) => {
      item.addDisabledClass();
    });
  }
  removeDisabledClass() {
    this.getChildren().forEach((item) => {
      item.removeDisabledClass();
    });
  }

  createKeyboard(difficulty) {
    this.difficulty = difficulty;
    this.destroyChildren();
    this.key = [];
    KEY_CODE[this.difficulty].forEach((item) => {
      this.key.push(new Key({ key: String.fromCharCode(item) }));
    });
    this.appendChildren(this.key);
  }

  getSelectorNode(key) {
    let data = false;
    this.getChildren().forEach((item, index) => {
      if (item.getSelectorNode(key)) {
        data = index;
      }
    });
    return data;
  }

  // addSelectClass(key) {
  //   this.getChildren().forEach((item) => item.addSelectClass(key));
  // }
  // removeSelectClass(key) {
  //   this.getChildren().forEach((item) => item.removeSelectClass());
  // }
}

export class Key extends Component {
  selectClass = "select-key";
  disabledClass = "disabled-key";
  constructor({ className = "", key }) {
    super({ tag: "span", className: `key ${className}`, text: key });
    this.key = key;
    this.getNode().dataset.key = key;
  }

  getSelectorNode(value) {
    if (value === this.key) {
      return true;
    } else {
      return false;
    }
  }

  addSelectClass() {
    this.getNode().classList.add(this.selectClass);
  }

  removeSelectClass() {
    this.getNode().classList.remove(this.selectClass);
  }

  addDisabledClass() {
    this.getNode().classList.add(this.disabledClass);
  }
  removeDisabledClass() {
    this.getNode().classList.remove(this.disabledClass);
  }
}
