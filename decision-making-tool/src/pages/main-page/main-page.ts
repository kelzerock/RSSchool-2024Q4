import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";
import { createNode } from "../../utils/node";
import { openModalWindow } from "../modal/open-modal-window";
import { addOption } from "./add-option";
import { handleAddOption, handleClearList } from "./handle-click";
import { templateForModal } from "./past-options-modal.ts/template-for-modal";

const buttonStyle =
  "bg-indigo-300 border rounded-md border-black px-5 py-1 hover:cursor-pointer hover:bg-indigo-500 w-5/6";

const createMainPage = (): void => {
  const wrapper = createNode({
    tag: "div",
    className:
      "flex justify-start flex-col items-center bg-emerald-300 grow py-6 max-w-2xl w-5/6 mx-auto gap-y-2",
    parent: document.body,
  });
  createNode({
    tag: "h1",
    className: "text-2xl",
    parent: wrapper,
    text: "Decision making tool",
  });
  const listOfOption = createNode({
    tag: "ul",
    className: "flex flex-col gap-y-2 py-1 px-3",
    parent: wrapper,
  });

  appState.options.forEach((option) => {
    addOption(option, listOfOption);
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
    text: "past list",
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
    text: "safe list to file",
  });
  const buttonLoadListFromFile = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "load list from file",
  });
  const buttonStart = createNode({
    tag: "button",
    className: buttonStyle,
    parent: wrapper,
    text: "start",
  });

  appState.elements[DOMElements.listOfOption] = listOfOption;

  console.log(buttonSafeListToFile, buttonLoadListFromFile, buttonStart);
};

export { createMainPage };
