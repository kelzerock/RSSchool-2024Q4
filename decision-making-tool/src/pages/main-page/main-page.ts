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

export const createMainPage = (): void => {
  removeAllChildren(document.body);
  const wrapper = createNode({
    tag: "div",
    className: wrapperStyles,
    parent: document.body,
  });
  createNode({
    tag: "h1",
    className: "text-3xl font-bold text-emerald-900",
    parent: wrapper,
    text: "Decision making tool",
  });

  const buttonAddOption = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "add option",
  });
  buttonAddOption.addEventListener("click", () =>
    handleAddOption(appState, listOfOption),
  );

  const buttonPastList = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "paste list",
  });
  buttonPastList.addEventListener("click", () => {
    openModalWindow(templateForModal());
  });
  const buttonClearList = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "clear list",
  });
  buttonClearList.addEventListener("click", () => {
    handleClearList(appState, listOfOption);
  });
  const buttonSafeListToFile = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "save list to file",
  });

  buttonSafeListToFile.addEventListener("click", () => {
    handleSafeOption(appState);
  });
  const buttonLoadListFromFile = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "load list from file",
  });

  buttonLoadListFromFile.addEventListener("click", () =>
    handleLoadFileWithOptions(appState),
  );

  const buttonStart = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "start",
  });

  const listOfOption = createNode({
    tag: "ul",
    className:
      "flex flex-col gap-y-2 py-1 px-3 max-h-60 overflow-y-auto scrollbar",
    parent: wrapper,
  });

  appState.options.forEach((option) => {
    addOption(option, listOfOption);
  });

  buttonStart.addEventListener("click", () => handleStart(appState));

  appState.elements[DOMElements.listOfOption] = listOfOption;
};
