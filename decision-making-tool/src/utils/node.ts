type typeCreateNode = {
  tag: keyof HTMLElementTagNameMap;
  className?: string;
  parent?: HTMLElement | DocumentFragment;
  text?: string;
  attributes?: attributes[];
};

type attributes = {
  name: string;
  value: string;
};

export const createNode = ({
  tag,
  className,
  parent,
  text,
  attributes,
}: typeCreateNode): HTMLElement => {
  const node = document.createElement(tag);
  node.className = className || "";
  node.textContent = text || "";
  if (attributes) {
    attributes.forEach((attribute) => {
      node.setAttribute(attribute.name, attribute.value);
    });
  }
  if (parent) parent.append(node);
  return node;
};
