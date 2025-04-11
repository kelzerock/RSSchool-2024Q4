import { attribute } from '../enums/attribute';

export const setDisabledElements = (
  array: HTMLElement[],
  value: boolean
): void => {
  if (value) {
    array.forEach((item) => item.setAttribute(attribute.disabled, ``));
  } else {
    array.forEach((item) => item.removeAttribute(attribute.disabled));
  }
};
