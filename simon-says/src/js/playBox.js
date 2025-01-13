import { Display } from "./display";
import { Keyboard } from "./keyboard";
import { Component } from "./node";
const KEY_CODE = [
  49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79,
  80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77,
];
const KEY = {
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  48: "0",
  81: "q",
  87: "w",
  69: "e",
  82: "r",
  84: "t",
  89: "y",
  85: "u",
  73: "i",
  79: "o",
  80: "p",
  65: "a",
  83: "s",
  68: "d",
  70: "f",
  71: "g",
  72: "h",
  74: "j",
  75: "k",
  76: "l",
  90: "z",
  88: "x",
  67: "c",
  86: "v",
  66: "b",
  78: "n",
  77: "m",
};

const difficulty = { easy: "easy", medium: "medium", hard: "hard" };
const level = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
// window.addEventListener("keydown", (event) => {
//   console.log({ event, key: event.key, keyCode: event.keyCode });
// });
class PlayBox extends Component {
  constructor({ className }, ...items) {
    super({ tag: "main", className }, ...items);
    this.difficulty = difficulty.easy;
    this.level = level.first;
    this.display = [];
    this.isPlay = true;
    this.addListener("click", (event) => this.clickKey(event));
    window.addEventListener("keydown", (event) => this.keyDownListener(event));
  }

  keyDownListener({ keyCode }) {
    if (!this.isPlay) return;
    if (!KEY_CODE.includes(keyCode)) return;
    const strCode = keyCode.toString();
    const info = KEY[strCode];
    this.startDisplay(info);
  }

  clickKey(event) {
    if (!this.isPlay) return;
    const key = event.target.closest("span");
    if (!key) return;
    if (!key.classList.contains("key"));
    const data = key.dataset.key;
    this.display.push(data);
    console.log({ it: this.display });
    this.startDisplay(data);
  }

  startDisplay(info) {
    this.getChildren()[0].append(
      new Component({
        tag: "span",
        className: "display-item",
        text: info.toUpperCase(),
      }),
    );
  }
}

const keyboard = new Keyboard({ difficulty: "easy" });

const playBox = new PlayBox({ className: "playBox" }, new Display(), keyboard);

export { playBox };
