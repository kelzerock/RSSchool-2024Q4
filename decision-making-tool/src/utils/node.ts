import { type TypeCreateNode } from "../types/type-create-node";

export const createNode = <T extends keyof HTMLElementTagNameMap>({
  tag,
  className,
  parent,
  text,
  attributes,
}: TypeCreateNode<T>): HTMLElementTagNameMap[T] => {
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
