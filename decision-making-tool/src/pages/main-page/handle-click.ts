import type { ApplicationState } from "../../state/types";
import { addOption } from "./add-option";

const handleAddOption = function (
  state: ApplicationState,
  parent: HTMLElement,
): void {
  const index = state.lastIndex++;
  state.options[index] = { index, description: "", weight: "" };
  addOption(state.options[index], parent);
};

export { handleAddOption };
