import { isAppStateDataCorrect } from "../pages/main-page/handle-click";
import { type ApplicationState } from "../types/application-state";

const appState: ApplicationState = {
  options: [{ index: 1, description: "", weight: "" }],
  elements: {},
  lastIndex: 1,
  animation: { duration: 10000 },
  sound: true,
};

const oldState = localStorage.getItem("appState");
if (oldState) {
  const parseState = JSON.parse(oldState);
  if (isAppStateDataCorrect(parseState)) {
    appState.lastIndex = parseState.lastIndex;
    appState.options = [...parseState.options];
    appState.animation.duration = parseState.animation.duration;
    appState.sound = parseState.sound;
  }
}

export const saveToLocalStorage = (): void =>
  localStorage.setItem("appState", JSON.stringify(appState));

export { appState };
