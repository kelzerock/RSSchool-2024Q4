import { map1, map11, map12, map2, map3 } from "./map";

const playerMap = {
  easy: {
    name: "easy",
    maps: { map1, map11, map12 },
  },
  medium: {
    name: "medium",
    maps: { map2 },
  },
  hard: {
    name: "hard",
    maps: { map3 },
  },
};

export { playerMap };
