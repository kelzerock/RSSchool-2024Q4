import { DOMElements } from "../../../enums/dom-elements";
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
      if (
        !Number.isNaN(Number.parseFloat(partWithNumber)) &&
        partWithNumber.split(".").length <= 2
      ) {
        arrayWithCorrectValue.push({
          description: value.slice(0, indexOfLastComma),
          weight: partWithNumber,
          index: ++state.lastIndex,
        });
      }
    }
  });

  arrayWithCorrectValue.forEach((option) => {
    state.options = [...state.options, option];
    addOption(option, state.elements[DOMElements.listOfOption]);
  });
};
