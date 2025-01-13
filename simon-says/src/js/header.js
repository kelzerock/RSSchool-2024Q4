import { Component } from "./node";

const h1 = new Component({
  tag: "h1",
  className: "title",
  text: "Simon says",
});

const description = new Component({
  tag: "p",
  className: "text",
  text: `In that instance of "Simon says" JS takes the role of "Simon" and prepare sequences of symbols to you,  which you should be repeate. You can play the game by using the physical or virtual keyboard.`,
});

export { h1, description };
