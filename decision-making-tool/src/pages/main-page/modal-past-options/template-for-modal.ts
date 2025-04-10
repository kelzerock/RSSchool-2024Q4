import { appState } from "../../../state/application-state";
import { ModalTypes } from "../../../types/modal-types";
import { createNode } from "../../../utils/node";
import { handleClickPastOption } from "./handle-click-past-option";

const stylesForModalButton = `bg-teal-700 rounded border-2 border-teal-800 py-1 px-4 text-teal-200 hover:bg-teal-800 hover:cursor-pointer hover:border-teal-700 mr-2`;

const stylesForTextarea =
  "w-full bg-teal-600 py-2 px-2 outline-none resize-none h-[150px]";

export const templateForModal = (): ModalTypes => {
  const fragmentForModal = new DocumentFragment();
  const textArea = createNode({
    tag: "textarea",
    className: stylesForTextarea,
    parent: fragmentForModal,
    attributes: [
      {
        name: "placeholder",
        value: `Paste a list of new options in a CSV-like format:
title,1 -> title="title", wight=1
title with whitespace,2 -> title="title with whitespace", wight=2
title , with , commas,3 -> title="title , with , commas", wight=3
title with "quotes",4   -> title="title with "quotes"", wight=4`,
      },
    ],
  });
  const buttonsWrapper = createNode({ tag: "div", parent: fragmentForModal });
  const buttonCancel = createNode({
    tag: "button",
    className: stylesForModalButton,
    parent: buttonsWrapper,
    text: "cancel",
  });
  const buttonConfirm = createNode({
    tag: "button",
    className: stylesForModalButton,
    parent: buttonsWrapper,
    text: "confirm",
  });
  buttonConfirm.addEventListener("click", function handleClick() {
    if (textArea instanceof HTMLTextAreaElement) {
      const value = textArea.value;
      handleClickPastOption(value, appState);
    }
    buttonConfirm.removeEventListener("click", handleClick);
  });
  return {
    template: fragmentForModal,
    closeElements: [buttonCancel, buttonConfirm],
  };
};
