const { map1 } = require("./constants/map/map");
const { Cell } = require("./js/cell");
const { Component } = require("./js/node");
import "./assets/style/main.scss";
import "./assets/style/game-place.scss";
import { GamePlace } from "./js/gamePlace";

console.log("hello world");
const state = {};
const gamePlace = new GamePlace({ state, map: map1 });
document.body.append(gamePlace.getNode());
