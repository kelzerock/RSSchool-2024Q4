import { appState, saveToLocalStorage } from "../../state/application-state";

export const handleAddOptionInput = (
  input: HTMLInputElement,
  index: number,
  info: "description" | "weight",
): void => {
  appState.options = appState.options.map((option) => {
    if (option.index === index) {
      return info === "description"
        ? { ...option, description: input.value }
        : { ...option, weight: input.value };
    }
    return option;
  });
  saveToLocalStorage();
};

export const handleAddOptionInputOnlyNumber = (
  input: HTMLInputElement,
  index: number,
  info: "description" | "weight",
): void => {
  let newValue = input.value.replace(/[^0-9.]/g, "");
  const parts = newValue.split(".");
  if (parts.length > 1) {
    newValue = parts.shift() + "." + parts.join("");
  }
  input.value = newValue;

  handleAddOptionInput(input, index, info);
};
