import { MS_IN_MINUTE } from "../../constants/constants";
import { saveToLocalStorage } from "../../state/application-state";
import { type ApplicationState } from "../../types/application-state";

export const handleInput = (
  input: HTMLInputElement,
  state: ApplicationState,
): void => {
  const value = input.value;

  if (value) {
    state.animation.duration = Number.parseFloat(value) * MS_IN_MINUTE;
    saveToLocalStorage();
  }
};
