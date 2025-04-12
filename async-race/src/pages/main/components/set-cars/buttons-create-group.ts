import { INITIAL_DATA_CAR } from '../../../../constants/global-constants';
import { Localstorage } from '../../../../enums/localstorage';
import type { CarForCreate } from '../../../../types/car-for-create';
import type { DataToCreateElement } from '../../../../types/data-to-create-element';
import { createElement } from '../../../../utils/create-element';
import { isCarForCreate } from '../../../../utils/is-car-for-create';
import { loadFromLocalstorage } from '../../../../utils/load-from-localstorage';
import { saveToLocalstorage } from '../../../../utils/save-to-localstorage';
import {
  createSetElements,
  dataForCreateElements,
} from './create-set-elements';
import { handleClickCreateCarButton } from './handle-functions/handle-click-create-button';
import { handleEventInput } from './handle-functions/handle-event-input';

const styles = {
  wrapperLevel: 'flex flex-row gap-x-2 items-center ',
};

const wrapperTemplate: DataToCreateElement<'div'> = {
  tagName: 'div',
  className: styles.wrapperLevel,
};

export const createButtonsCreateGroup = (parent: HTMLElement): void => {
  const saveCarInLocalStorage = loadFromLocalstorage(
    Localstorage.createCarStorage
  );

  const carDataForCreate: CarForCreate = { ...INITIAL_DATA_CAR };

  const wrapper = createElement({ ...wrapperTemplate, parent });

  const [inputText, inputColor, buttonCreateCar] = createSetElements(
    wrapper,
    dataForCreateElements
  );
  buttonCreateCar.textContent = 'create';

  if (isCarForCreate(saveCarInLocalStorage)) {
    const { name, color } = saveCarInLocalStorage;
    inputColor.value = color;
    inputText.value = name;
  }

  inputColor.addEventListener('change', (event: Event) => {
    handleEventInput(event, carDataForCreate, inputColor);
    saveToLocalstorage(Localstorage.createCarStorage, carDataForCreate);
  });

  inputText.addEventListener('input', (event: Event) => {
    handleEventInput(event, carDataForCreate, inputText);
    saveToLocalstorage(Localstorage.createCarStorage, carDataForCreate);
  });

  buttonCreateCar.addEventListener('click', async () => {
    handleClickCreateCarButton(carDataForCreate, inputColor, inputText);
  });
};
