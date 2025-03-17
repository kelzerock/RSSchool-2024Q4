import type { ApplicationState } from "./types";

const appState: ApplicationState = {
  options: [],
  elements: {},
  lastIndex: 0,
};

export const saveToLocalStorage = (): void =>
  localStorage.setItem("appState", JSON.stringify(appState));

export { appState };
