const createNode = (
  tag: keyof HTMLElementTagNameMap,
  className: string,
  parent: HTMLElement,
  text = "",
): void => {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  parent.append(node);
};

export { createNode };
