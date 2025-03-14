const createNode = (
  tag: keyof HTMLElementTagNameMap,
  className: string,
  parent: HTMLElement,
  text = "",
): HTMLElement => {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  parent.append(node);
  return node;
};

export { createNode };
