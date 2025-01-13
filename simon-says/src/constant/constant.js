const DELAY = 500;
const KEY_CODE = {
  easy: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
  medium: [
    81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    90, 88, 67, 86, 66, 78, 77,
  ],
  hard: [
    49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79,
    80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77,
  ],
};
const KEY = {
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  48: "0",
  81: "q",
  87: "w",
  69: "e",
  82: "r",
  84: "t",
  89: "y",
  85: "u",
  73: "i",
  79: "o",
  80: "p",
  65: "a",
  83: "s",
  68: "d",
  70: "f",
  71: "g",
  72: "h",
  74: "j",
  75: "k",
  76: "l",
  90: "z",
  88: "x",
  67: "c",
  86: "v",
  66: "b",
  78: "n",
  77: "m",
};

const DIFFICULTY = { easy: "easy", medium: "medium", hard: "hard" };
const LEVEL = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
const RESULT = { win: "win", lose: "lose" };
const MAX_LEVEL = 2;

export { KEY, KEY_CODE, DIFFICULTY, LEVEL, DELAY, RESULT, MAX_LEVEL };
