import { Component } from "./node";
import { timer } from "./timer";
import "../assets/style/controls-panel.scss";
import {
  loadGameButton,
  newGameButton,
  randomGameButton,
  resetGameButton,
  saveGameButton,
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
  randomGameButton,
  saveGameButton,
  loadGameButton,
]);

export { controlsPanel };
