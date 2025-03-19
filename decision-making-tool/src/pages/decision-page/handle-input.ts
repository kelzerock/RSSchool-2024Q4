import { saveToLocalStorage } from "../../state/application-state";
import type { ApplicationState } from "../../state/types";

export const handleInput = (
  input: HTMLInputElement,
  state: ApplicationState,
): void => {
  const value = input.value;
  if (value) {
    state.animation.duration = Number.parseFloat(value) * 1000;
    saveToLocalStorage();
  }
};
