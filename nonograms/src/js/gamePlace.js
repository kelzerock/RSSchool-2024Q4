import { DIRECTION } from "../constants/constant";
import { map1 } from "../constants/map/map";
import { playerMap } from "../constants/map/playerMap";
import { compare2DArrays } from "../utils/function";
import { newGameButton, resetGameButton, startNewGame } from "./buttons";
import { Cell } from "./cell";
import { GamePlaceInfo } from "./gamePlaceInfo";
import { Component } from "./node";
import { divSelectLevel, divSelectMapName } from "./select";
import { timer } from "./timer";

const state = { cells: {} };
const messageBox = new Component({
  tag: "span",
  className: "message-box",
  text: "",
});
messageBox.hide();

export class GamePlace extends Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.createMap();

    this.addListener("contextmenu", (e) => {
      e.preventDefault();
    });

    this.addListener("mousemove", (e) => {
      const target = e.target;
      if (target.classList.contains("cell")) {
        const row = target.getAttribute("data-row");
        const col = target.getAttribute("data-col");
        document.querySelectorAll(".column.active").forEach((item) => {
          item.classList.remove("active");
        });
        document.querySelector(`[data-row="${row}"]`)?.classList.add("active");
        document.querySelector(`[data-col="${col}"]`)?.classList.add("active");
      }
    });

    this.addListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("cell")) {
        if (!timer.getStatus()) timer.startTimer();
        let check = compare2DArrays(this.map, this.state.mapData);
        if (check) {
          const durationInSeconds = timer.stopTimer();
          messageBox.setTextContent(
            "You win! Time: " + durationInSeconds + " seconds"
          );
          messageBox.show();
          Object.values(this.state.cells).forEach((value) => {
            value.removeListener("click", value.handleClick);
            value.removeListener("contextmenu", value.handleClick);
          });
        }
      }
    });
  }

  createMap() {
    messageBox.hide();
    console.log(this.map);
    this.state.mapData = Array.from({ length: this.map.length }, () =>
      Array(this.map[0].length).fill(0)
    );
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
        this.state.cells[`${index}-${jIndex}`] = cellNode;
        cellNode.addListener("click", cellNode.handleClick);
        cellNode.addListener("contextmenu", cellNode.handleClick);
      });
      console.log(this.state);

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

  resetMap() {
    Object.values(this.state.cells).forEach((value) => {
      value.addListener("click", value.handleClick);
      value.addListener("contextmenu", value.handleClick);
      value.resetState();
    });
    timer.resetTimer();
    messageBox.hide();
  }

  hideMap() {
    this.getNode().style.display = "none";
  }

  viewMap() {
    this.getNode().style.display = "grid";
  }
}

const gamePlace = new GamePlace({ state, map: map1 });
gamePlace.hide();

// buttons logic

resetGameButton.addListener("click", () => {
  gamePlace.resetMap();
});

newGameButton.addListener("click", () => {
  messageBox.hide();
  gamePlace.hideMap();
  divSelectLevel.show();
  divSelectMapName.show();
  timer.hide();
});

startNewGame.addListener("click", () => {
  gamePlace.viewMap();
  gamePlace.destroyChildren();
  divSelectLevel.hide();
  divSelectMapName.hide();
  timer.show();
  const level = divSelectLevel.getNode().querySelector("select").value;
  const mapName = divSelectMapName.getNode().querySelector("select").value;
  const map = playerMap[level].maps[mapName];
  gamePlace.map = map;

  gamePlace.createMap();
});

export { gamePlace, messageBox };
