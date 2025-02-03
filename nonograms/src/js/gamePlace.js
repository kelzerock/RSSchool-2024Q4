import { DIRECTION } from "../constants/constant";
import { cross } from "../constants/map/map";
import { playerMap } from "../constants/map/playerMap";
import { compare2DArrays, randomIntFromInterval } from "../utils/function";
import {
  loadGameButton,
  newGameButton,
  randomGameButton,
  resetGameButton,
  saveGameButton,
  solutionButton,
  startNewGame,
} from "./buttons";
import { Cell } from "./cell";
import { GamePlaceInfo } from "./gamePlaceInfo";
import { messagePlace } from "./messageDownBox";
import { Component } from "./node";
import { divSelectLevel, divSelectMapName } from "./select";
import { soundPlayWin } from "./soundFunc";
import { timer } from "./timer";

const state = { cells: {}, level: null, mapName: null, rightMap: null };
const messageBox = new Component({
  tag: "span",
  className: "message-box",
  text: "",
});
messageBox.hide();
const messageInfoGame = new Component({
  tag: "span",
  className: "message-box",
  text: "",
});
messageInfoGame.hide();
messageBox.hide();

export class GamePlace extends Component {
  constructor({ state, map }, ...children) {
    super({ tag: "div", className: "game-place" }, ...children);
    this.state = state;
    this.map = map;
    this.win = false;
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
        // if (!timer.getStatus()) timer.startTimer();
        let check = compare2DArrays(this.map, this.state.mapData);
        if (check) {
          const durationInSeconds = timer.stopTimer();
          messageBox.setTextContent(
            "You win! Time: " + durationInSeconds + " seconds"
          );
          const winner = localStorage.getItem("winner");
          const data = {
            time: durationInSeconds + " seconds",
            name: this.state.mapName,
            level: this.state.level,
          };
          if (!winner) {
            localStorage.setItem("winner", JSON.stringify([data]));
          } else {
            const saveWinners = JSON.parse(winner);
            if (saveWinners.length < 5) {
              saveWinners.push(data);
              localStorage.setItem("winner", JSON.stringify(saveWinners));
            } else {
              while (saveWinners.length > 4) {
                saveWinners.shift();
              }
              saveWinners.push(data);
              localStorage.setItem("winner", JSON.stringify(saveWinners));
            }
          }
          messagePlace.load();
          if (!this.win) {
            soundPlayWin();
            loadGameButton.hide();
            saveGameButton.hide();
          }
          this.win = true;
          solutionButton.hide();
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
    this.win = false;
    messageInfoGame.setTextContent(
      `Name map: "${this.state.mapName}", level: "${this.state.level}", size: ${this.map.length}x${this.map[0].length}`
    );
    messageBox.hide();
    this.state.rightMap = this.map;
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
    this.state.cells = {};
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

  viewSavedMap(sec) {
    Object.values(this.state.cells).forEach((value) => {
      value.viewSavedState();
    });
  }

  viewSolution() {
    Object.values(this.state.cells).forEach((value) => {
      value.removeListener("click", value.handleClick);
      value.removeListener("contextmenu", value.handleClick);
      value.viewSolution();
    });
    timer.resetTimer();
  }

  hideMap() {
    this.getNode().style.display = "none";
  }

  viewMap() {
    this.getNode().style.display = "grid";
  }
}

const gamePlace = new GamePlace({
  state,
  map: Object.values(Object.values(playerMap)[0].maps)[0],
});
gamePlace.hide();

// buttons logic

resetGameButton.addListener("click", () => {
  gamePlace.resetMap();
  solutionButton.show();
  messagePlace.hide();
});

newGameButton.addListener("click", () => {
  messageBox.hide();
  messageInfoGame.hide();
  gamePlace.hideMap();
  divSelectLevel.show();
  divSelectMapName.show();
  timer.hide();
  messagePlace.show("flex");
  messagePlace.load();
});

const algorithmToStartGame = (map) => {
  gamePlace.viewMap();
  gamePlace.destroyChildren();
  divSelectLevel.hide();
  divSelectMapName.hide();
  timer.show();
  timer.resetTimer();
  gamePlace.map = map;
  gamePlace.createMap();
};

startNewGame.addListener("click", () => {
  const level = divSelectLevel.getNode().querySelector("select").value;
  const mapName = divSelectMapName.getNode().querySelector("select").value;
  state.level = level;
  state.mapName = mapName;
  const map = playerMap[level].maps[mapName];
  algorithmToStartGame(map);
  messageInfoGame.show();
  messagePlace.hide();
});

randomGameButton.addListener("click", () => {
  const levelInd = randomIntFromInterval(0, Object.keys(playerMap).length - 1);
  const level = Object.keys(playerMap)[levelInd];
  const mapNameInd = randomIntFromInterval(
    0,
    Object.keys(playerMap[level].maps).length - 1
  );
  const mapName = Object.keys(playerMap[level].maps)[mapNameInd];
  state.level = level;
  state.mapName = mapName;
  const map = playerMap[level].maps[mapName];
  algorithmToStartGame(map);
  messageInfoGame.show();
  messagePlace.hide();
});

solutionButton.addListener("click", () => {
  solutionButton.hide();
  gamePlace.viewSolution();
  timer.hide();
});

saveGameButton.addListener("click", () => {
  localStorage.setItem(
    "state",
    JSON.stringify({
      map: state.mapData,
      name: state.mapName,
      level: state.level,
      time: timer.getDuration(),
    })
  );
});

loadGameButton.addListener("click", () => {
  const { map, name, level, time } = JSON.parse(localStorage.getItem("state"));
  state.level = level;
  state.mapName = name;
  const newMap = playerMap[level].maps[name];

  gamePlace.viewMap();
  gamePlace.destroyChildren();
  divSelectLevel.hide();
  divSelectMapName.hide();
  gamePlace.map = newMap;
  gamePlace.createMap();
  state.mapData = map;
  timer.startTimer(time);
  gamePlace.viewSavedMap(time);
  messageInfoGame.show();
  messagePlace.hide();
});

export { gamePlace, messageBox, messageInfoGame };
