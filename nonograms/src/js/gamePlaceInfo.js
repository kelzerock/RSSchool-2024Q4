import { Component } from "./node";
import "../assets/style/game-place-info.scss";
import { DIRECTION } from "../constants/constant";
import { maxLength } from "../utils/function";

export class GamePlaceInfo extends Component {
  constructor({ state, map, direction }) {
    super({
      tag: "div",
      className: "game-place-info " + direction,
    });
    this.state = state;
    this.map = map;
    this.direction = direction;
    this.maxLengthMap = maxLength(map);

    if (this.direction === DIRECTION.up) {
      this.createInfo();
    } else {
      this.createInfoLeft();
    }
  }

  createInfo() {
    for (let i = 0; i < this.map[0].length; i++) {
      const column = new Component({ tag: "div", className: "column" });
      column.setAttribute("data-col", i);
      let countColumn = 0;
      let count = 0;
      for (let j = 0; j < this.map.length; j++) {
        if (this.map[j][i] === 1) {
          count++;
        } else if (this.map[j][i] === 0 && count > 0) {
          column.append(
            new Component({ tag: "span", className: "sell-info", text: count })
          );
          countColumn += 1;
          count = 0;
        }
      }
      if (count > 0) {
        column.append(
          new Component({ tag: "span", className: "sell-info", text: count })
        );
        countColumn += 1;
      }
      this.append(column);
      if (countColumn < this.maxLengthMap.vertical) {
        while (countColumn < this.maxLengthMap.vertical) {
          column.prepend(
            new Component({
              tag: "span",
              className: "sell-info empty",
              text: "",
            })
          );
          countColumn += 1;
        }
      }
    }
  }

  createInfoLeft() {
    for (let i = 0; i < this.map.length; i++) {
      const column = new Component({
        tag: "div",
        className: `column`,
      });
      column.setAttribute("data-row", i);
      let count = 0;
      let countColumn = 0;
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] === 1) {
          count++;
        } else if (this.map[i][j] === 0 && count > 0) {
          column.append(
            new Component({ tag: "span", className: "sell-info", text: count })
          );
          countColumn += 1;
          count = 0;
        }
      }
      if (count > 0) {
        column.append(
          new Component({ tag: "span", className: "sell-info", text: count })
        );
        countColumn += 1;
      }
      this.append(column);
      if (countColumn < this.maxLengthMap.horizontal) {
        while (countColumn < this.maxLengthMap.horizontal) {
          column.prepend(
            new Component({
              tag: "span",
              className: "sell-info empty",
              text: "",
            })
          );
          countColumn += 1;
        }
      }
    }
  }
}
