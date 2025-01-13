// пуск
// уровень сложности
// новая игра
// повторить последовательность
// уровень сложности

import { Component } from "./node";
import { keyboard, playBox } from "./playBox";
import "../assets/sass/controls.scss";
import { DIFFICULTY } from "../constant/constant";

class Button extends Component {
  constructor({ className, text }) {
    super({ tag: "button", className: `button button-${className}`, text });
  }
}

class StartButton extends Button {
  disActiveClassName = "button--disabled";
  visibleClassName = "button--invisible";
  constructor({ className, text, visible = true }) {
    super({
      className: `${className} ${visible ? "" : "button--invisible"}`,
      text,
    });
    this.value = text;
    this.visible = visible;
    this.conditions = false;
  }

  removeDisActiveClass() {
    this.getNode().classList.remove(this.disActiveClassName);
  }
  addDisActiveClass() {
    this.getNode().classList.add(this.disActiveClassName);
  }
  removeVisibleClassName() {
    this.getNode().classList.remove(this.visibleClassName);
  }
  addVisibleClassName() {
    this.getNode().classList.add(this.visibleClassName);
  }
}
const startBtn = new StartButton({ className: "startButton", text: "start" });

const easyLevelBtn = new StartButton({
  className: "levelBtn active-level",
  text: DIFFICULTY.easy,
});
const mediumLevelBtn = new StartButton({
  className: "levelBtn",
  text: DIFFICULTY.medium,
});
const hardLevelBtn = new StartButton({
  className: "levelBtn",
  text: DIFFICULTY.hard,
});
const levelDiv = new Component(
  { tag: "div", className: "controls-level" },
  easyLevelBtn,
  mediumLevelBtn,
  hardLevelBtn,
);

const arrLevelBtns = levelDiv.getChildren();
arrLevelBtns.forEach((element) => {
  element.addListener("click", (event) => {
    arrLevelBtns.forEach((item) =>
      item.getNode().classList.remove("active-level"),
    );
    element.getNode().classList.add("active-level");
    const difficulty = element.value;
    keyboard.createKeyboard(difficulty);
    playBox.difficulty = difficulty;
  });
});

const repeatInfo = new StartButton({
  className: "repeatInfo",
  text: "repeat the sequence",
  visible: false,
});
const newGame = new StartButton({
  className: "newGame",
  text: "new game",
  visible: false,
});

const controls = new Component(
  {
    tag: "div",
    className: "controls",
  },
  startBtn,
  newGame,
  repeatInfo,
  levelDiv,
);

startBtn.addListener("click", (event) => {
  //controls
  startBtn.addVisibleClassName();
  newGame.removeVisibleClassName();
  repeatInfo.removeVisibleClassName();
  arrLevelBtns.forEach((element) => {
    element.addDisActiveClass();
  });

  //playbox
  playBox.isPlay = true;
});

newGame.addListener("click", () => {
  //controls
  startBtn.removeVisibleClassName();
  newGame.addVisibleClassName();
  repeatInfo.addVisibleClassName();
  arrLevelBtns.forEach((element) => {
    element.removeDisActiveClass();
  });

  //playbox
  playBox.isPlay = false;
  playBox.cleanDisplay();
});

export { controls };
