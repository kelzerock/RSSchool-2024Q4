import { simpleButton } from "../../../styles/styles";
import { createNode } from "../../../utils/node";
import type { modalTypes } from "../../modal/open-modal-window";
import { openModalWindow } from "../../modal/open-modal-window";

export const modalWithMessageTemplate = (text: string): modalTypes => {
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
