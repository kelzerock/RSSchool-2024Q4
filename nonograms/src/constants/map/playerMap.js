import { map1, map11, map12, map2, map3 } from "./map";

const playerMap = {
  easy: {
    name: "easy",
    maps: [
      { name: "map1", map: map1 },
      { name: "map11", map: map11 },
      { name: "map12", map: map12 },
    ],
  },
  medium: {
    name: "medium",
    maps: [{ name: "map3", map: map2 }],
  },
  hard: {
    name: "hard",
    maps: [{ name: "map3", map: map3 }],
  },
};

export { playerMap };
