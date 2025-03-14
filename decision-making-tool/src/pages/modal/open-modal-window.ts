import { createNode } from "../../utils/node";
import { handleCloseModal } from "./handle-close-modal";

type modalTypes = {
  template: HTMLElement;
  closeElements: HTMLElement[];
};

export const openModalWindow = ({
  template,
  closeElements = [],
}: modalTypes): void => {
  const styleModalWindow =
    "absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-amber-900/70 flex justify-center items-center";
  const styleFormModal =
    "w-[90%] h-min py-2 px-2 border-3 border-emerald-600 bg-emerald-300 rounded-lg";

  const dialog = createNode("dialog", styleModalWindow, document.body);
  dialog.setAttribute("open", "true");
  const form = createNode("form", styleFormModal, dialog);
  form.setAttribute("method", "dialog");
  form.append(template);
  createNode("button", "", form, "close");

  [dialog, ...closeElements].forEach((element) => {
    element.addEventListener("click", function addListener(event): void {
      if (event.target === element) {
        element.removeEventListener("click", addListener);
        handleCloseModal(event, element, dialog);
      }
    });
  });
};
