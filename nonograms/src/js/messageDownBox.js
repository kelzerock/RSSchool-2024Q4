import { Component } from "./node";

class messageDownBox extends Component {
  constructor({ tag = "div", className = "", text = "" }, info) {
    super(
      { tag, className, text },
      info.map(
        (item) =>
          new Component(
            { tag: "div" },
            item.map((el) => new Component({ tag: "span", text: el }))
          )
      )
    );
  }
}

export { messageDownBox };
