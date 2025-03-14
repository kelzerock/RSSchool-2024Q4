import type { ApplicationState } from "./types";

const appState: ApplicationState = {
  options: [
    { description: "test 1", weight: 34, index: 1 },
    { description: "test 2", weight: 55, index: 2 },
  ],
  lastIndex: 0,
};

export { appState };
