import { saveToLocalStorage } from "../../state/application-state";
import type { ApplicationState } from "../../state/types";

export const handleInput = (
  input: HTMLInputElement,
  state: ApplicationState,
): void => {
  const value = input.value;
  if (value) {
    if (Number.parseFloat(value) < 0.1) input.value = "1";
    state.animation.duration = Number.parseFloat(value) * 1000;
    saveToLocalStorage();
  }
};
