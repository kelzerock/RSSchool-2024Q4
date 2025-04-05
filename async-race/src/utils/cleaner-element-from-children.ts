export const cleanerElementFromChildren = (element: HTMLElement): void => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};
