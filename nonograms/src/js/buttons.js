import { Component } from "./node";
import "../assets/style/buttons.scss";

class Button extends Component {
  constructor({ tag = "button", className = "", text = "" }, ...children) {
    super({ tag, className: `button ${className}`, text }, ...children);
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
window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    changeThemeButton.setTextContent("Change Theme to Light");
    document.body.classList.add("dark-theme");
  }
});

solutionButton.hideButton();
newGameButton.hideButton();
resetGameButton.hideButton();

newGameButton.addListener("click", () => {
  startNewGame.showButton();
  resetGameButton.hideButton();
  newGameButton.hideButton();
  solutionButton.hideButton();
});

startNewGame.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
  solutionButton.showButton();
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

export {
  resetGameButton,
  startNewGame,
  newGameButton,
  solutionButton,
  changeThemeButton,
};
