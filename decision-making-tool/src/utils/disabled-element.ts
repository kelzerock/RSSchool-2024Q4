import { DISABLED } from "../constants/constants";

export const disabledElement = (element: HTMLElement): void => {
  element.setAttribute(DISABLED, "");
};
