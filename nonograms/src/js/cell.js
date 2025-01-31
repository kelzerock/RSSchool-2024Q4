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
      this.setDataBlack();
    });

    this.addListener("contextmenu", (e) => {
      e.preventDefault();
      this.toggleCrossClass();
      this.setDataBlack();
    });
  }

  toggleCheckedClass() {
    if (this.getNode().classList.contains(this.checkedClass)) {
      this.getNode().classList.remove(this.checkedClass);
      this.dataBlack = false;
    } else {
      this.getNode().classList.add(this.checkedClass);
      this.getNode().classList.remove(this.crossClass);
      this.dataBlack = true;
    }
  }

  resetState() {
    this.getNode().classList.remove(this.checkedClass);
    this.getNode().classList.remove(this.crossClass);
    this.dataBlack = false;
    this.setDataBlack();
  }

  getCoordinates() {
    const rowAttribute = this.getNode().getAttribute("data-row");
    const colAttribute = this.getNode().getAttribute("data-col");
    return [rowAttribute, colAttribute];
  }

  setDataBlack() {
    const [rowAttribute, colAttribute] = this.getCoordinates();
    this.state.mapData[rowAttribute][colAttribute] = this.dataBlack ? 1 : 0;
  }

  toggleCrossClass() {
    if (this.getNode().classList.contains(this.crossClass)) {
      this.getNode().classList.remove(this.crossClass);
    } else {
      this.getNode().classList.add(this.crossClass);
      this.getNode().classList.remove(this.checkedClass);
      this.dataBlack = false;
    }
  }
}
