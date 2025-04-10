import { saveToLocalStorage } from "../../state/application-state";
import { ApplicationState } from "../../types/application-state";

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
