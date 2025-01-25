import { Cell } from "./cell";
import { GamePlaceHeaderInfo } from "./gamePlaceHeaderInfo";
import { Component } from "./node";

export class GamePlace extends Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.createMap();
  }

  createMap() {
    const gamePlaceMain = new Component({
      tag: "div",
      className: "game-place-main",
    });
    const gamePlaceBlock = new Component({
      tag: "div",
      className: "game-place-block",
    });
    const gamePlaceHeaderInfo = new GamePlaceHeaderInfo({
      state: this.state,
      map: this.map,
    });
    const gamePlaceLeftInfo = new Component({
      tag: "div",
      className: "game-place-left",
    });

    this.map.forEach((row, index) => {
      const elementInRow = [];
      row.forEach((cell, jIndex) => {
        const data = cell ? true : false;
        elementInRow.push(new Cell(this.state, data));
      });

      gamePlaceMain.append(
        new Component({ tag: "div", className: "row" }, ...elementInRow)
      );
    });
    this.appendChildren([
      gamePlaceBlock,
      gamePlaceHeaderInfo,
      gamePlaceLeftInfo,
      gamePlaceMain,
    ]);
  }
}
