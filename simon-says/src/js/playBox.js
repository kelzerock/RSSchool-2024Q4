import { DIFFICULTY, LEVEL, KEY, KEY_CODE } from "../constant/constant";
import { randomIntFromInterval } from "../utils/utils";
import { controls } from "./controls";
import { Display } from "./display";
import { Keyboard } from "./keyboard";
import { Component } from "./node";

class PlayBox extends Component {
  constructor({ className }, ...items) {
    super({ tag: "main", className }, ...items);
    this.difficulty = DIFFICULTY.easy;
    this.level = 1;
    this.display = [];
    this.sequence = [];
    this.isPlay = false;
    this.addListener("click", (event) => this.clickKey(event));
    window.addEventListener("keydown", (event) => this.keyDownListener(event));
  }

  generateSequence() {
    this.sequence = [];
    const arrSymbols = KEY_CODE[this.difficulty].map((symbol) =>
      String.fromCharCode(symbol),
    );
    let count = 0;
    while (count < this.level * 2) {
      const randomNum = randomIntFromInterval(0, arrSymbols.length - 1);
      this.sequence.push(arrSymbols[randomNum]);
      count += 1;
    }
    console.log({ arrSymbols: this.sequence });
    this.playSequence();
    this.isPlay = true;
  }

  playSequence() {
    this.sequence.forEach((item, index) => {
      setTimeout(
        () => {
          this.startDisplay(item);
        },
        1000 * (index + 1),
      );
    });
    this.cleanDisplay();
  }

  keyDownListener({ keyCode }) {
    if (!this.isPlay) return;
    if (!KEY_CODE[this.difficulty].includes(keyCode)) return;
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
    this.startDisplay(data);
  }

  startDisplay(info) {
    this.getChildren()[1].append(
      new Component({
        tag: "span",
        className: "display-item",
        text: info.toUpperCase(),
      }),
    );
  }

  cleanDisplay() {
    this.getChildren()[1].destroyChildren();
    this.display = [];
  }
}

const keyboard = new Keyboard({ difficulty: DIFFICULTY.easy });

const playBox = new PlayBox(
  { className: "playBox" },
  controls,
  new Display(),
  keyboard,
);

export { playBox, keyboard };
