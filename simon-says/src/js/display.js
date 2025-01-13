import { Component } from "./node";
import "../assets/sass/display.scss";

export class Display extends Component {
  constructor() {
    super({ tag: "div", className: `display` });
  }
}
