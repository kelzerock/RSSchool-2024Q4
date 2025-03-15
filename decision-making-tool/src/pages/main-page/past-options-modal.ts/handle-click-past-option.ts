import { DOMElements } from "../../../enums/dom-elements";
import { appState } from "../../../state/application-state";
import type { ApplicationState, optionType } from "../../../state/types";
import { addOption } from "../add-option";

export const handleClickPastOption = (
  value: string,
  state: ApplicationState,
): void => {
  const arrayWithValues = value.split("\n");
  const arrayWithCorrectValue: optionType[] = [];
  arrayWithValues.forEach((value) => {
    const indexOfLastComma = value.lastIndexOf(",");
    if (indexOfLastComma !== -1) {
      const partWithNumber = value.slice(indexOfLastComma + 1).trim();
      if (!Number.isNaN(Number.parseFloat(partWithNumber))) {
        arrayWithCorrectValue.push({
          description: value.slice(0, indexOfLastComma),
          weight: partWithNumber,
          index: ++appState.lastIndex,
        });
      }
    }
  });

  arrayWithCorrectValue.forEach((option) => {
    addOption(option, state.elements[DOMElements.listOfOption]);
  });
};
