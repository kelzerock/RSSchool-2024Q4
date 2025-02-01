import {
  arrowUp,
  bigCross,
  cross,
  figure_1,
  figure_2,
  figure_3,
  giraffe,
  heart,
  house,
  map3,
  smile,
  square,
} from "./map";

const playerMap = {
  easy: {
    name: "easy",
    maps: { square, cross, figure_1, figure_2, figure_3, giraffe },
  },
  medium: {
    name: "medium",
    maps: { heart, smile, house, arrowUp, bigCross },
  },
  hard: {
    name: "hard",
    maps: { map3 },
  },
};

export { playerMap };
