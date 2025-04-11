import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";
import { wrapperStyles } from "../../styles/styles";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";
import { openModalWindow } from "../modal/open-modal-window";
import { addOption } from "./add-option";
import {
  handleAddOption,
  handleClearList,
  handleLoadFileWithOptions,
  handleSafeOption,
  handleStart,
} from "./handle-click";
import { templateForModal } from "./modal-past-options/template-for-modal";

const buttonStyle =
  "bg-indigo-300 border rounded-md border-black px-5 py-1 hover:cursor-pointer hover:bg-indigo-500 w-5/6";

const dataToButtonsForMainPage: { className: string; text: string }[] = [
  {
    className: buttonStyle,
    text: "add option",
  },
  {
    className: buttonStyle,
    text: "paste list",
  },
  {
    className: buttonStyle,
    text: "clear list",
  },
  {
    className: buttonStyle,
    text: "save list to file",
  },
  {
    className: buttonStyle,
    text: "load list from file",
  },
  {
    className: buttonStyle,
    text: "start",
  },
];

const createElementsForMainPage = (
  parent: HTMLDivElement,
): { buttons: HTMLButtonElement[]; ulElement: HTMLUListElement } => {
  createNode({
    tag: "h1",
    className: "text-3xl font-bold text-emerald-900",
    parent: parent,
    text: "Decision making tool",
  });

  const buttonsArray = dataToButtonsForMainPage.map((element) => {
    return createNode({
      ...element,
      parent,
      tag: "button",
    });
  });

  const listOfOption = createNode({
    tag: "ul",
    className:
      "flex flex-col gap-y-2 py-1 px-3 max-h-60 overflow-y-auto scrollbar",
    parent: parent,
  });

  return { buttons: buttonsArray, ulElement: listOfOption };
};

export const createMainPage = (): void => {
  removeAllChildren(document.body);

  const wrapper = createNode({
    tag: "div",
    className: wrapperStyles,
    parent: document.body,
  });

  const {
    buttons: [
      buttonAddOption,
      buttonPastList,
      buttonClearList,
      buttonSafeListToFile,
      buttonLoadListFromFile,
      buttonStart,
    ],
    ulElement: listOfOption,
  } = createElementsForMainPage(wrapper);

  buttonPastList.addEventListener("click", () => {
    openModalWindow(templateForModal());
  });

  buttonAddOption.addEventListener("click", () =>
    handleAddOption(appState, listOfOption),
  );

  buttonClearList.addEventListener("click", () => {
    handleClearList(appState, listOfOption);
  });

  buttonSafeListToFile.addEventListener("click", () => {
    handleSafeOption(appState);
  });

  buttonLoadListFromFile.addEventListener("click", () =>
    handleLoadFileWithOptions(appState),
  );

  appState.options.forEach((option) => {
    addOption(option, listOfOption);
  });

  buttonStart.addEventListener("click", () => handleStart(appState));

  appState.elements[DOMElements.listOfOption] = listOfOption;
};
