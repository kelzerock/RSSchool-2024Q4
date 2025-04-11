import { setDisabledElements } from './set-disabled-elements';

export const toggleDisabledStatus = (
  toDisabled: HTMLElement[],
  toUnDisabled: HTMLElement[]
): void => {
  setDisabledElements(toDisabled, true);
  setDisabledElements(toUnDisabled, false);
};
