import { simpleButton } from "../../../styles/styles";
import { ModalTypes } from "../../../types/modal-types";
import { createNode } from "../../../utils/node";
import { openModalWindow } from "../../modal/open-modal-window";

export const modalWithMessageTemplate = (text: string): ModalTypes => {
  const template = createNode({ tag: "div", className: "p-3" });
  createNode({ tag: "p", className: "p-2", text, parent: template });
  const button = createNode({
    tag: "button",
    className: simpleButton,
    text: "OK",
    parent: template,
  });

  return { template, closeElements: [button] };
};

export const modalWithMessage = (text: string): void => {
  openModalWindow(modalWithMessageTemplate(text));
};
