import type { Car } from '../../../../../types/car';
import { clearInputs } from '../../../../../utils/crear-inputs';
import { setDisabledElements } from '../../../../../utils/set-disabled-elements';
import { handleUpdateCar } from '../../race-area/handle-functions/handle-update-car';

export const handleClickButtonUpdate = async (
  setButtons: HTMLElement[],
  carDataForCreate: Car,
  inputColor: HTMLInputElement,
  inputText: HTMLInputElement
): Promise<void> => {
  setDisabledElements(setButtons, true);
  handleUpdateCar(carDataForCreate);
  clearInputs(inputColor, inputText);
};
