import { Component } from "./node";
import "../assets/style/buttons.scss";
import { soundButtonClick } from "./soundFunc";

class Button extends Component {
  constructor({ tag = "button", className = "", text = "" }, ...children) {
    super({ tag, className: `button ${className}`, text }, ...children);
    this.addListener("click", soundButtonClick);
  }

  hideButton() {
    this.getNode().style.display = "none";
  }

  showButton() {
    this.getNode().style.display = "block";
  }
}

const resetGameButton = new Button({
  tag: "button",
  className: "reset-game-button",
  text: "Reset Game",
});

const randomGameButton = new Button({
  tag: "button",
  className: "random-game-button",
  text: "Random Game",
});

const newGameButton = new Button({
  tag: "button",
  className: "new-game-button",
  text: "New Game",
});

const startNewGame = new Button({
  tag: "button",
  className: "start-new-game-button",
  text: "Start New Game",
});

const solutionButton = new Button({
  tag: "button",
  className: "solution-button",
  text: "Solution",
});

const changeThemeButton = new Button({
  tag: "button",
  className: "change-theme-button",
  text: "Change Theme to Dark",
});

const saveGameButton = new Button({
  tag: "button",
  className: "save-game-button",
  text: "Save Game",
});

const loadGameButton = new Button({
  tag: "button",
  className: "load-game-button",
  text: "Load Game",
});

window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    changeThemeButton.setTextContent("Change Theme to Light");
    document.body.classList.add("dark-theme");
  }
  const saveGame = localStorage.getItem("state");
  console.log({ saveGame });
  if (saveGame) {
    loadGameButton.show();
  } else {
    loadGameButton.hide();
  }
});

solutionButton.hideButton();
newGameButton.hideButton();
resetGameButton.hideButton();
saveGameButton.hideButton();

newGameButton.addListener("click", () => {
  startNewGame.showButton();
  resetGameButton.hideButton();
  newGameButton.hideButton();
  solutionButton.hideButton();
  randomGameButton.showButton();
  saveGameButton.hideButton();
});

startNewGame.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
  if (localStorage.getItem("state")) {
    loadGameButton.showButton();
  }
});

randomGameButton.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
  if (localStorage.getItem("state")) {
    loadGameButton.showButton();
  }
});

changeThemeButton.addListener("click", () => {
  if (changeThemeButton.getNode().textContent === "Change Theme to Dark") {
    changeThemeButton.setTextContent("Change Theme to Light");
    document.body.classList.add("dark-theme");
    localStorage.setItem("color-theme", "dark");
  } else {
    changeThemeButton.setTextContent("Change Theme to Dark");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("color-theme", "light");
  }
});

loadGameButton.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
  randomGameButton.hideButton();
  saveGameButton.showButton();
});

saveGameButton.addListener("click", () => {
  loadGameButton.showButton();
});

solutionButton.addListener("click", () => {
  saveGameButton.hide();
});

export {
  resetGameButton,
  startNewGame,
  newGameButton,
  solutionButton,
  changeThemeButton,
  randomGameButton,
  loadGameButton,
  saveGameButton,
};
