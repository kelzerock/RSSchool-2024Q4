const { Component } = require("./js/node");
import "./assets/style/main.scss";
import "./assets/style/game-place.scss";
import { gamePlace, messageBox, messageInfoGame } from "./js/gamePlace";
import { header } from "./js/header";
import { footer } from "./js/footer";
import { controlsPanel } from "./js/controlsPanel";

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
  footer
);
document.body.append(wrapper.getNode());

window.addEventListener("load", () => {
  const theme = localStorage.getItem("color-theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
