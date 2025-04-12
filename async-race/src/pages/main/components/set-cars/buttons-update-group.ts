import { cssInputBlock } from '../../../../global-styles';
import type { Car } from '../../../../types/car';
import { createElement } from '../../../../utils/create-element';
import { handleEventInput } from './handle-functions/handle-event-input';
import { handleClickButtonUpdate } from './handle-functions/handle-click-button-update';
import { callbackForUpdateButton } from './handle-functions/callback-for-update-button';
import {
  createSetElements,
  dataForCreateElements,
} from './create-set-elements';
import { setDisabledElements } from '../../../../utils/set-disabled-elements';
import { DEFAULT_COLOR } from '../../../../constants/global-constants';

export const createButtonsUpdateGroup = (
  parent: HTMLElement
): ((car: Car) => void) => {
  let carDataForCreate: Car;

  const wrapper = createElement({
    tagName: 'div',
    className: cssInputBlock.wrapperLevel,
    parent,
  });

  const setButtons = createSetElements(wrapper, dataForCreateElements);
  const [inputText, inputColor, buttonUpdateCar] = setButtons;
  setDisabledElements(setButtons, true);
  inputColor.value = DEFAULT_COLOR;

  buttonUpdateCar.addEventListener('click', async () => {
    handleClickButtonUpdate(
      setButtons,
      carDataForCreate,
      inputColor,
      inputText
    );
  });

  inputColor.addEventListener('change', (event: Event) =>
    handleEventInput(event, carDataForCreate, inputColor)
  );

  inputText.addEventListener('input', (event: Event) =>
    handleEventInput(event, carDataForCreate, inputText)
  );

  const callback = (car: Car): void => {
    carDataForCreate = { ...car };
    callbackForUpdateButton(car, setButtons, inputColor, inputText);
  };

  return callback;
};
