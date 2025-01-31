import { Component } from "./node";
import "../assets/style/buttons.scss";

class Button extends Component {
  constructor({ tag = "button", className = "", text = "" }, ...children) {
    super({ tag, className: `button ${className}`, text }, ...children);
  }
}

const resetGameButton = new Button({
  tag: "button",
  className: "reset-game-button",
  text: "Reset Game",
});

export { resetGameButton };
