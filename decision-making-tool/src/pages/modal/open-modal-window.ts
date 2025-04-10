import type { ModalTypes } from "../../types/modal-types";
import { createNode } from "../../utils/node";
import { removeElementWithChildren } from "../../utils/remove-element-with-children";
import { handleCloseModal } from "./handle-close-modal";

export const openModalWindow = ({
  template,
  closeElements = [],
}: ModalTypes): void => {
  const styleModalWindow =
    "fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-amber-900/70 flex justify-center items-center";
  const styleFormModal =
    "w-[90%] max-w-[600px] h-min py-2 px-2 border-3 border-emerald-600 bg-emerald-300 rounded-lg";

  const dialog = createNode({
    tag: "dialog",
    className: styleModalWindow,
    parent: document.body,
  });
  dialog.setAttribute("open", "true");
  const form = createNode({
    tag: "form",
    className: styleFormModal,
    parent: dialog,
  });
  form.setAttribute("method", "dialog");
  form.append(template);
  document.body.classList.add("overflow-hidden");

  [dialog, ...closeElements].forEach((element) => {
    element.addEventListener("click", function addListener(event): void {
      event.preventDefault();
      if (event.target === element) {
        element.removeEventListener("click", addListener);
        handleCloseModal(event, element, dialog);
      }
    });
  });

  globalThis.addEventListener("keydown", function addEvent(event) {
    globalThis.removeEventListener("keydown", addEvent);
    if (event.keyCode === 27) {
      document.body.classList.remove("overflow-hidden");
      removeElementWithChildren(dialog);
    }
  });
};
