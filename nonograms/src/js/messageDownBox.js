import { Component } from "./node";
import "../assets/style/message-down-box.scss";

class messageDownBox extends Component {
  constructor({ tag = "div", className = "", text = "" }) {
    super({ tag, className: "message-down-box " + className, text });
  }

  addInfo(data) {
    const newInfo = data.map((item) => {
      const div = new Component({ tag: "div", className: "info-row" });
      const info = Object.entries(item).map(([key, value]) => {
        const info = new Component({
          tag: "span",
          className: `info ${key}`,
          text: `${key} - ${value}`,
        });
        return info;
      });
      div.appendChildren(info);
      return div;
    });
    this.appendChildren(newInfo);
  }

  load() {
    this.destroyChildren();
    const winner = localStorage.getItem("winner");
    if (winner) {
      this.addInfo(JSON.parse(winner));
    }
  }
}

const messagePlace = new messageDownBox({
  tag: "div",
  className: "message-place",
  text: "",
});
export { messagePlace };
