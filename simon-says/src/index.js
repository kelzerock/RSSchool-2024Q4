import { Component } from "./js/node.js";
import "./assets/sass/main.scss";
import { playBox } from "./js/playBox.js";
import { h1, description } from "./js/header.js";

const header = new Component(
  {
    tag: "header",
    className: "header",
    text: "",
  },
  h1,
  description,
);
const footer = new Component({
  tag: "footer",
  className: "footer",
  text: "",
});
const wrapper = new Component(
  { tag: "div", className: "wrapper" },
  header,
  playBox,
  footer,
);

document.body.append(wrapper.getNode());
