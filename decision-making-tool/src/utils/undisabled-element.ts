import { DISABLED } from "../constants/constants";

export const unDisabledElement = (element: HTMLElement): void => {
  element.removeAttribute(DISABLED);
};
