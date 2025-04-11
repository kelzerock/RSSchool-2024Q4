import type { Car } from '../../../../../types/car';
import { setDisabledElements } from '../../../../../utils/set-disabled-elements';

export const callbackForUpdateButton = (
  car: Car,
  setButtons: HTMLElement[],
  inputColor: HTMLInputElement,
  inputText: HTMLInputElement
): void => {
  setDisabledElements(setButtons, false);
  inputColor.value = car.color;
  inputText.value = car.name;
};
