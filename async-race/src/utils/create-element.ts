import type { DataToCreateElement } from '../types/data-to-create-element';

export const createElement = <T extends keyof HTMLElementTagNameMap>(
  options: DataToCreateElement<T>
): HTMLElementTagNameMap[T] => {
  const { tagName, className, parent, text, attributes } = options;
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (parent) {
    parent.append(element);
  }

  if (text) {
    element.textContent = text;
  }

  if (attributes) {
    attributes.forEach((attribute) => {
      const { attr, value } = attribute;
      element.setAttribute(attr, value);
    });
  }

  return element;
};
