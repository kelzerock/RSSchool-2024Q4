const { Component } = require("./js/node");
import "./assets/style/main.scss";
import "./assets/style/game-place.scss";
import { gamePlace } from "./js/gamePlace";
import { header } from "./js/header";
import { footer } from "./js/footer";
import { controlsPanel } from "./js/controlsPanel";

console.log("hello world");

const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  header,
  controlsPanel,
  gamePlace,
  footer
);
document.body.append(wrapper.getNode());
