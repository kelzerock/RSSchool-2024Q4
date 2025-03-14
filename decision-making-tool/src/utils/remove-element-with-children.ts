export const removeElementWithChildren = (element: HTMLElement): void => {
  while (element.lastChild) {
    element.lastChild.remove();
  }
  element.remove();
};
