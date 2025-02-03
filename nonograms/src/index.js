const { Component } = require("./js/node");
import "./assets/style/main.scss";
import "./assets/style/game-place.scss";
import { gamePlace, messageBox, messageInfoGame } from "./js/gamePlace";
import { header } from "./js/header";
import { footer } from "./js/footer";
import { controlsPanel } from "./js/controlsPanel";
import { messagePlace } from "./js/messageDownBox";

const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  header,
  controlsPanel,
  new Component(
    { tag: "div", className: "message-place" },
    messageBox,
    messageInfoGame
  ),
  gamePlace,
  messagePlace,
  footer
);
document.body.append(wrapper.getNode());

window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }

  const winner = localStorage.getItem("winner");
  if (winner) {
    const data = JSON.parse(winner);
    messagePlace.addInfo(data);
  }
});
