import { Component } from "./node";
import "../assets/style/cell.scss";

export class Cell extends Component {
  checkedClass = "cell-black";
  crossClass = "cell-cross";
  constructor(state, dataBlack) {
    super({ tag: "span", className: "cell" });
    this.dataBlack = dataBlack;
    this.state = state;

    this.addListener("click", () => {
      this.toggleCheckedClass();
    });

    this.addListener("contextmenu", (e) => {
      e.preventDefault();
      this.toggleCrossClass();
    });
  }

  toggleCheckedClass() {
    if (this.getNode().classList.contains(this.checkedClass)) {
      this.getNode().classList.remove(this.checkedClass);
    } else {
      this.getNode().classList.add(this.checkedClass);
      this.getNode().classList.remove(this.crossClass);
    }
  }

  toggleCrossClass() {
    if (this.getNode().classList.contains(this.crossClass)) {
      this.getNode().classList.remove(this.crossClass);
    } else {
      this.getNode().classList.add(this.crossClass);
      this.getNode().classList.remove(this.checkedClass);
    }
  }
}
