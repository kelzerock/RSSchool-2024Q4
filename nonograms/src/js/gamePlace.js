import { DIRECTION } from "../constants/constant";
import { Cell } from "./cell";
import { GamePlaceInfo } from "./gamePlaceInfo";
import { Component } from "./node";

export class GamePlace extends Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.createMap();

    this.addListener("mousemove", (e) => {
      const target = e.target;
      console.log(target);
      if (target.classList.contains("cell")) {
        const row = target.getAttribute("data-row");
        const col = target.getAttribute("data-col");
        const rowInfo = document.querySelector(`[data-row="${row}"]`);
        const colInfo = document.querySelector(`[data-col="${col}"]`);
        document.querySelectorAll(".column.active").forEach((item) => {
          item.classList.remove("active");
        });
        if (rowInfo) {
          rowInfo.classList.add("active");
        }
        if (colInfo) {
          colInfo.classList.add("active");
        }
      }
    });
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
    const gamePlaceHeaderInfo = new GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: DIRECTION.up,
    });
    const gamePlaceLeftInfo = new GamePlaceInfo({
      state: this.state,
      map: this.map,
      direction: DIRECTION.left,
    });

    this.map.forEach((row, index) => {
      const elementInRow = [];
      row.forEach((cell, jIndex) => {
        const data = cell ? true : false;
        const cellNode = new Cell(this.state, data);
        cellNode.getNode().setAttribute("data-row", index);
        cellNode.getNode().setAttribute("data-col", jIndex);
        elementInRow.push(cellNode);
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
