import { Component } from "./node";

export class GamePlaceHeaderInfo extends Component {
  constructor({ state, map }) {
    super({
      tag: "div",
      className: "game-place-header-info",
    });
    this.state = state;
    this.map = map;
    this.createInfo();
  }

  createInfo() {
    console.log(this.map);
    for (let i = 0; i < this.map[0].length; i++) {
      const column = new Component({ tag: "div", className: "column" });
      let count = 0;
      for (let j = 0; j < this.map.length; j++) {
        if (this.map[i][j] === 1) {
          count++;
        } else if (this.map[i][j] === 0 && count > 0) {
          column.append(new Component({ tag: "span", text: count }));
          count = 0;
        }
      }
      if (count > 0) {
        column.append(new Component({ tag: "span", text: count }));
      }
      this.append(column);
    }
  }
}
