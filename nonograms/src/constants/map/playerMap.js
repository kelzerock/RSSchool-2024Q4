import {
  arrowUp,
  bigCross,
  calculator,
  cross,
  figure_1,
  figure_2,
  figure_3,
  fox,
  giraffe,
  goat,
  heart,
  hedgehog,
  house,
  img_1,
  smile,
  snake,
  square,
} from "./map";

const playerMap = {
  easy: {
    name: "easy",
    maps: { square, cross, figure_1, figure_2, figure_3, giraffe },
  },
  medium: {
    name: "medium",
    maps: { heart, smile, house, arrowUp, bigCross, img_1 },
  },
  hard: {
    name: "hard",
    maps: { fox, calculator, snake, goat, hedgehog },
  },
};

export { playerMap };
