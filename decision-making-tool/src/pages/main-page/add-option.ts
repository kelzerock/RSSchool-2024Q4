import { appState } from "../../state/application-state";
import type { optionType } from "../../state/types";
import { createNode } from "../../utils/node";
import { handleDeleteOption } from "./handle-click";

const addOption = (option: optionType, parent: HTMLElement): void => {
  const styleLiElement =
      "bg-emerald-400 grid grid-cols-[40px_1fr_100px_150px] gap-x-1 px-1 py-1 rounded-sm",
    styleSpanElement =
      "bg-emerald-600 rounded-md flex items-center justify-center text-white",
    styleInput =
      "bg-emerald-800 text-white text-right px-2 py-1 rounded-sm outline-none",
    styleButton =
      "bg-emerald-600 text-white rounded-md hover:bg-emerald-700 hover:cursor-pointer";

  const itemLi = createNode({ tag: "li", className: styleLiElement, parent });
  createNode({
    tag: "span",
    className: styleSpanElement,
    parent: itemLi,
    text: `#${option.index}`,
  });
  const inputDescription = createNode({
    tag: "input",
    className: styleInput,
    parent: itemLi,
  });
  inputDescription.setAttribute("value", option.description);
  const inputWeight = createNode({
    tag: "input",
    className: styleInput,
    parent: itemLi,
  });
  inputWeight.setAttribute("value", option.weight);
  const buttonDeleteOption = createNode({
    tag: "button",
    className: styleButton,
    parent: itemLi,
    text: "delete",
  });
  buttonDeleteOption.addEventListener("click", () => {
    handleDeleteOption(appState, itemLi, option.index);
  });
};

export { addOption };
