import { Cell } from "./cell";
import { Component } from "./node";

export class GamePlace extends Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.createMap();
  }

  createMap() {
    this.map.forEach((row, index) => {
      const elementInRow = [];
      row.forEach((cell, jIndex) => {
        const data = cell ? true : false;
        elementInRow.push(new Cell(this.state, data));
      });

      this.append(
        new Component({ tag: "div", className: "row" }, ...elementInRow)
      );
    });
  }
}
