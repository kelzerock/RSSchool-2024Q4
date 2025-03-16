import type { ApplicationState } from "../../state/types";
import { createNode } from "../../utils/node";
import { addOption } from "./add-option";
import { createMainPage } from "./main-page";

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

export const handleSafeOption = (state: ApplicationState): void => {
  const link = document.createElement("a");
  link.download = "state.json";
  const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
};

export const handleLoadFileWithOptions = (state: ApplicationState): void => {
  const input = createNode({
    tag: "input",
    attributes: [
      { name: "type", value: "file" },
      { name: "accept", value: "application/json" },
    ],
  });
  input.click();

  input.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      const file = event.target.files[0];

      if (file) {
        file
          .text()
          .then((content: string) => {
            const parsedData: unknown =
              typeof content === "string" ? JSON.parse(content) : "";

            if (isAppStateDataCorrect(parsedData)) {
              state.lastIndex = parsedData.lastIndex;
              state.options = parsedData.options;
            } else {
              console.log("Данные некорректны");
            }
            console.log(state);

            createMainPage();
          })
          .catch((error) => {
            console.error("Ошибка при чтении файла:", error);
          });
      }
    }
  });
};

const isAppStateDataCorrect = (data: unknown): data is ApplicationState => {
  if (
    typeof data === "object" &&
    data !== null &&
    "lastIndex" in data &&
    typeof data.lastIndex === "number" &&
    "elements" in data &&
    typeof data.elements === "object" &&
    data.elements !== null &&
    "options" in data &&
    Array.isArray(data.options) &&
    data.options.every(
      (option) =>
        option &&
        typeof option.index === "number" &&
        typeof option.description === "string" &&
        typeof option.weight === "string",
    )
  ) {
    return true;
  }
  return false;
};
