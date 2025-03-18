import { removeElementWithChildren } from "../../utils/remove-element-with-children";

export const handleCloseModal = (
  event: MouseEvent,
  element: HTMLElement,
  modalWindow: HTMLElement,
): void => {
  const { target } = event;
  if (target === element) {
    document.body.classList.remove("overflow-hidden");
    removeElementWithChildren(modalWindow);
  }
};
