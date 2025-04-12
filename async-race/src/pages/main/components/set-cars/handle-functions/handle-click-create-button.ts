import { INITIAL_DATA_CAR } from '../../../../../constants/global-constants';
import { Localstorage } from '../../../../../enums/localstorage';
import { stateRace } from '../../../../../state/state';
import type { CarForCreate } from '../../../../../types/car-for-create';
import { saveToLocalstorage } from '../../../../../utils/save-to-localstorage';
import { mainPage } from '../../../main-page';

export const handleClickCreateCarButton = async (
  carDataForCreate: CarForCreate,
  inputColor: HTMLInputElement,
  inputText: HTMLInputElement
): Promise<void> => {
  await stateRace.createCar(carDataForCreate);
  inputColor.value = INITIAL_DATA_CAR.color;
  inputText.value = INITIAL_DATA_CAR.name;
  carDataForCreate.color = INITIAL_DATA_CAR.color;
  carDataForCreate.name = INITIAL_DATA_CAR.name;
  saveToLocalstorage(Localstorage.createCarStorage, carDataForCreate);
  mainPage();
};
