import { Component } from "./node";
import { timer } from "./timer";
import "../assets/style/controls-panel.scss";
import { newGameButton, resetGameButton, startNewGame } from "./buttons";

class ControlsPanel extends Component {
  constructor() {
    super({
      tag: "div",
      className: "controls-panel",
    });
  }
}

const controlsPanel = new ControlsPanel();
controlsPanel.appendChildren([
  timer,
  startNewGame,
  newGameButton,
  resetGameButton,
]);

export { controlsPanel };
