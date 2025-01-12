import { Display } from "./display";
import { Keyboard } from "./keyboard";
import { Component } from "./node";

const difficulty = { easy: "easy", medium: "medium", hard: "hard" };
const level = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };

class PlayBox extends Component {
  constructor({ className }, ...items) {
    super({ tag: "main", className }, ...items);
    this.difficulty = difficulty.easy;
    this.level = level.first;
    this.display = [];
    this.addListener("click", (event) => this.clickKey(event, this.display));
  }

  clickKey(event, database) {
    const key = event.target.closest("span");

    if (!key) return;
    if (!key.classList.contains("key"));
    const data = key.dataset.key;
    database.push(data);
    console.log("key", { display: database, data });
  }
}

const keyboard = new Keyboard({ difficulty: "easy" });

const playBox = new PlayBox({ className: "playBox" }, new Display(), keyboard);

export { playBox };
