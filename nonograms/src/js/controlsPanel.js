import { Component } from "./node";
import { timer } from "./timer";
import "../assets/style/controls-panel.scss";
import {
  newGameButton,
  resetGameButton,
  solutionButton,
  startNewGame,
} from "./buttons";
import { divSelectLevel, divSelectMapName } from "./select";

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
  solutionButton,
  resetGameButton,
  divSelectLevel,
  divSelectMapName,
]);

export { controlsPanel };
