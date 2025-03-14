import type { ApplicationState } from "../../state/types";
import { createNode } from "../../utils/node";

const addOption = (state: ApplicationState, parent: HTMLElement): void => {
  const styleLiElement =
      "bg-emerald-400 grid grid-cols-[40px_1fr_100px_150px] gap-x-1 px-1 py-1 rounded-sm",
    styleSpanElement =
      "bg-emerald-600 rounded-md flex items-center justify-center text-white",
    styleInput =
      "bg-emerald-800 text-white text-right px-2 py-1 rounded-sm outline-none",
    styleButton =
      "bg-emerald-600 text-white rounded-md hover:bg-emerald-700 hover:cursor-pointer";

  state.options.forEach((element) => {
    const itemLi = createNode("li", styleLiElement, parent);
    createNode("span", styleSpanElement, itemLi, `#${element.index}`);
    const inputDescription = createNode("input", styleInput, itemLi);
    inputDescription.setAttribute("value", element.description);
    const inputWeight = createNode("input", styleInput, itemLi);
    inputWeight.setAttribute("value", element.weight.toString());
    createNode("button", styleButton, itemLi, "delete");
  });
};

export { addOption };
