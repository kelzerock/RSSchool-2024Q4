import { handleLocation, handlePath } from "../../router/router";
import type { ApplicationState } from "../../state/types";
import { isReadyToMakeDecision } from "../../utils/is-ready-to-make-decision";
import { createNode } from "../../utils/node";
import { addOption } from "./add-option";
import { createMainPage } from "./main-page";
import { modalWithMessage } from "./modal-with-message/modal-with.message";

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

export const handleLoadFileWithOptions = async (
  state: ApplicationState,
): Promise<void> => {
  const input = createNode({
    tag: "input",
    attributes: [
      { name: "type", value: "file" },
      { name: "accept", value: "application/json" },
    ],
  });
  input.click();

  input.addEventListener("change", async (event) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      const file = event.target.files[0];

      if (file) {
        try {
          const content = await file.text();
          let parsedData: unknown;
          try {
            parsedData = JSON.parse(content);
          } catch (error) {
            modalWithMessage("Parsing completed with mistake!");
            console.error("Ошибка парсинга JSON:", error);
            return;
          }

          if (isAppStateDataCorrect(parsedData)) {
            state.lastIndex = parsedData.lastIndex;
            state.options = parsedData.options;
            createMainPage();
          } else {
            modalWithMessage("Be careful! Loaded data was incorrect!");
            console.error("Данные некорректны");
          }
        } catch (error) {
          modalWithMessage("Mistake in process to read file!");
          console.error("Ошибка при чтении файла:", error);
        }
      }
    }
  });
};

const isAppStateDataCorrect = (
  data: unknown,
): data is Omit<ApplicationState, "elements"> => {
  if (
    typeof data === "object" &&
    data !== null &&
    "lastIndex" in data &&
    typeof data.lastIndex === "number" &&
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

export const handleStart = (state: ApplicationState): void => {
  if (isReadyToMakeDecision(state)) {
    globalThis.history.pushState({}, "", handlePath("/decision"));
    handleLocation();
  } else {
    const message = `Please add at least 2 valid options.
    An option is considered valid if its title is not empty and its weight is greater than 0`;
    modalWithMessage(message);
  }
};
