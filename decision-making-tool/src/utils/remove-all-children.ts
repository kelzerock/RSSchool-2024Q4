export const removeAllChildren = (element: HTMLElement): void => {
  while (element.lastChild) {
    element.lastChild.remove();
  }
};
