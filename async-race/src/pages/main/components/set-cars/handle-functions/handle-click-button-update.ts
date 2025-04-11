import { stateRace } from '../../../../../state/state';
import type { Car } from '../../../../../types/car';
import { clearInputs } from '../../../../../utils/crear-inputs';
import { setDisabledElements } from '../../../../../utils/set-disabled-elements';

export const handleClickButtonUpdate = async (
  setButtons: HTMLElement[],
  carDataForCreate: Car,
  inputColor: HTMLInputElement,
  inputText: HTMLInputElement
): Promise<void> => {
  setDisabledElements(setButtons, true);
  await stateRace.updateCar({ ...carDataForCreate });
  clearInputs(inputColor, inputText);
};
