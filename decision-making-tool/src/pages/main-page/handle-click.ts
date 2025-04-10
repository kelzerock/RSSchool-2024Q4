import { handleLocation } from "../../router/router";
import { saveToLocalStorage } from "../../state/application-state";
import { ApplicationState } from "../../types/application-state";
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
  saveToLocalStorage();
};

export const handleClearList = (
  state: ApplicationState,
  parent: HTMLElement,
): void => {
  state.options = [];
  state.lastIndex = 0;
  saveToLocalStorage();
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};

const createCopyForSafePartOfState = (
  state: ApplicationState,
): Pick<ApplicationState, "options" | "lastIndex"> => {
  return { options: [...state.options], lastIndex: state.lastIndex };
};

export const handleSafeOption = (state: ApplicationState): void => {
  const link = document.createElement("a");
  link.download = "state.json";
  const blob = new Blob([JSON.stringify(createCopyForSafePartOfState(state))], {
    type: "application/json",
  });
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

          if (isLoadDataCorrect(parsedData)) {
            state.lastIndex = parsedData.lastIndex;
            state.options = parsedData.options;
            saveToLocalStorage();
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

export const isLoadDataCorrect = (
  data: unknown,
): data is Pick<ApplicationState, "options" | "lastIndex"> => {
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

export const isAppStateDataCorrect = (
  data: unknown,
): data is Omit<ApplicationState, "elements"> => {
  if (
    typeof data === "object" &&
    data !== null &&
    "lastIndex" in data &&
    typeof data.lastIndex === "number" &&
    "options" in data &&
    "animation" in data &&
    typeof data.animation === "object" &&
    data.animation &&
    "sound" in data &&
    typeof data.sound === "boolean" &&
    "duration" in data.animation &&
    typeof data.animation.duration === "number" &&
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
    saveToLocalStorage();
    globalThis.history.pushState({}, "", "/decision");
    handleLocation();
  } else {
    const message = `Please add at least 2 valid options.
    An option is considered valid if its title is not empty and its weight is greater than 0`;
    modalWithMessage(message);
  }
};
