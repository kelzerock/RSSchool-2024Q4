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

newGameButton.hideButton();
resetGameButton.hideButton();

newGameButton.addListener("click", () => {
  startNewGame.showButton();
  resetGameButton.hideButton();
  newGameButton.hideButton();
});

startNewGame.addListener("click", () => {
  startNewGame.hideButton();
  resetGameButton.showButton();
  newGameButton.showButton();
});

export { resetGameButton, startNewGame, newGameButton };
