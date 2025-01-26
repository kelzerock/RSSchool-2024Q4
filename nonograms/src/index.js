const { map1 } = require("./constants/map/map");
const { Component } = require("./js/node");
import "./assets/style/main.scss";
import "./assets/style/game-place.scss";
import { GamePlace } from "./js/gamePlace";
import { header } from "./js/header";
import { footer } from "./js/footer";
import { timer } from "./js/timer";

console.log("hello world");
const state = {};

const gamePlace = new GamePlace({ state, map: map1 });
const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  header,
  timer,
  gamePlace,
  footer
);
document.body.append(wrapper.getNode());
