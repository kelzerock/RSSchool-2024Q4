import {
  DIFFICULTY,
  LEVEL,
  KEY,
  KEY_CODE,
  DELAY,
  RESULT,
  MAX_LEVEL,
} from "../constant/constant";
import { randomIntFromInterval } from "../utils/utils";
import { controls, newGame, nextLevel, repeatInfo } from "./controls";
import { Display } from "./display";
import { Key, Keyboard } from "./keyboard";
import { Component } from "./node";

class PlayBox extends Component {
  constructor({ className }, ...items) {
    super({ tag: "main", className }, ...items);
    this.difficulty = DIFFICULTY.easy;
    this.level = 1;
    this.attempt = 1;
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
    console.log("sequence: ", this.sequence);
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
              if (this.attempt > 0) repeatInfo.removeDisActiveClass();
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
    this.getChildren()[1].append(
      new Component({
        tag: "span",
        className: "display-item",
        text: info.toUpperCase(),
      }),
    );

    const length = this.display.length;
    // console.log({ info, length, display: this.sequence, play: this.isPlay });
    if (this.isPlay) {
      if (info === this.sequence[length - 1]) {
        if (length === this.sequence.length) {
          //game logic
          this.isPlay = false;
          if (this.level <= MAX_LEVEL) {
            this.level += 1;
            this.attempt = 1;

            this.isPlay = false;
            this.sendMessage(RESULT.win);
            //controls
            repeatInfo.addDisActiveClass();
            if (this.level < MAX_LEVEL + 1) {
              repeatInfo.addVisibleClassName();
              nextLevel.removeVisibleClassName();
            }
          }
        }
      } else {
        this.isPlay = false;
        this.sendMessage(RESULT.lose);
      }
    }
  }

  sendMessage(result) {
    this.cleanDisplay();
    const addWinMsg = this.level === 6 ? "Game over! " : "";
    const addLostMsg =
      this.attempt === 0
        ? " You doesn't have more attempt!"
        : " You have one more attempt!";
    const msg =
      result === RESULT.win
        ? addWinMsg + `You won! Congratulations!`
        : `Sorry, you lost!` + addLostMsg;
    this.startDisplay(msg);
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
