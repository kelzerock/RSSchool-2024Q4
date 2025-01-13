import { DIFFICULTY, LEVEL, KEY, KEY_CODE, DELAY } from "../constant/constant";
import { randomIntFromInterval } from "../utils/utils";
import { controls, newGame, repeatInfo } from "./controls";
import { Display } from "./display";
import { Key, Keyboard } from "./keyboard";
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
  }

  playSequence() {
    newGame.addDisActiveClass();
    repeatInfo.addDisActiveClass();
    this.isPlay = false;
    this.cleanDisplay();

    this.sequence.forEach((item, index) => {
      setTimeout(
        () => {
          this.startDisplay(item);
          const keyNode = this.getKey(item);
          keyNode.addSelectClass();
          setTimeout(() => {
            keyNode.removeSelectClass();
          }, DELAY);
          if (index === this.sequence.length - 1) {
            setTimeout(() => {
              this.cleanDisplay();
              keyNode.removeSelectClass();
              newGame.removeDisActiveClass();
              repeatInfo.removeDisActiveClass();
              this.isPlay = true;
            }, DELAY);
          }
        },
        DELAY * (index + 1),
      );
    });
    return true;
  }

  getKey(key) {
    const keyboardNode = this.getChildren()[2];
    const keyIndex = keyboardNode.getSelectorNode(key);
    return keyboardNode.getChildren()[keyIndex];
  }

  keyDownListener({ keyCode }) {
    if (!this.isPlay) return;
    if (!KEY_CODE[this.difficulty].includes(keyCode)) return;
    const info = String.fromCharCode(keyCode);
    this.display.push(info);
    this.startDisplay(info);
    const nodeKey = this.getKey(info);
    nodeKey.addSelectClass();
    setTimeout(() => {
      nodeKey.removeSelectClass();
    }, 100);
  }

  clickKey(event) {
    if (!this.isPlay) return;
    const key = event.target.closest("span");
    if (!key) return;
    const data = key.dataset.key;
    this.display.push(data);
    this.startDisplay(data);
  }

  startDisplay(info) {
    const length = this.display.length;
    // console.log({ info, length, display: this.sequence, play: this.isPlay });
    if (info === this.sequence[length - 1] && this.isPlay) {
      console.log("OK");
      if (length === this.sequence.length) {
        console.log("you are win!!");
        this.isPlay = false;
      }
    } else {
      console.log("you are lose!!");
      this.isPlay = false;
    }
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
