import { Component } from "./js/node.js";
import "./assets/sass/main.scss";
import { playBox } from "./js/playBox.js";

const header = new Component({
  tag: "header",
  className: "header",
  text: "I'm header",
});
const footer = new Component({
  tag: "footer",
  className: "footer",
  text: "I'm footer",
});
const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  header,
  playBox,
  footer,
);

document.body.append(wrapper.getNode());
