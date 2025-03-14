import type { ApplicationState } from "../../state/types";
import { addOption } from "./add-option";

export const handleAddOption = (
  state: ApplicationState,
  parent: HTMLElement,
): void => {
  const index = ++state.lastIndex;
  const newOption = { index, description: "", weight: "" };
  state.options = [...state.options, newOption];
  addOption(newOption, parent);
};

export const handleDeleteOption = (
  state: ApplicationState,
  target: HTMLElement,
  index: number,
): void => {
  while (target.lastChild) {
    target.lastChild.remove();
  }
  target.remove();
  state.options = state.options.filter((element) => element.index !== index);
  if (state.options.length === 0) {
    state.lastIndex = 0;
  }
};

export const handleClearList = (
  state: ApplicationState,
  parent: HTMLElement,
): void => {
  state.options = [];
  state.lastIndex = 0;
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};
