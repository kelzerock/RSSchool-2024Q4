import { DEFAULT_COLOR } from '../constants/global-constants';

export const clearInputs = (
  inputColor: HTMLInputElement,
  inputText: HTMLInputElement
): void => {
  inputColor.value = DEFAULT_COLOR;
  inputText.value = '';
};
