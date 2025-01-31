import { Component } from "./node";
import { timer } from "./timer";
import "../assets/style/controls-panel.scss";
import { resetGameButton } from "./buttons";

class ControlsPanel extends Component {
  constructor() {
    super({
      tag: "div",
      className: "controls-panel",
    });
  }
}

const controlsPanel = new ControlsPanel();
controlsPanel.appendChildren([timer, resetGameButton]);

export { controlsPanel };
