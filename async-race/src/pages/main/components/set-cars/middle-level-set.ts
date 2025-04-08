import { stateRace, type Car } from '../../../../state/state';
import { createElement } from '../../../../utils/create-element';
import { setDisabledElements } from '../../../../utils/set-disabled-elements';
import { handleEventUpLevel } from './handle-event-up-level';

const disabledStyle =
  'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';
const styles = {
  wrapperLevel: 'flex flex-row gap-x-2 items-center ',
  inputText:
    'w-50 border-red-950 border-3 rounded-md bg-red-50 text-red-950 py-1 px-2 outline-none ' +
    disabledStyle,
  inputColor: 'colorInput disabled:hover:cursor-not-allowed',
  button:
    'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
    disabledStyle,
};

const createElements = (
  parent: HTMLElement
): [HTMLInputElement, HTMLInputElement, HTMLButtonElement] => {
  const inputText = createElement({
    tagName: 'input',
    className: styles.inputText,
    parent,
    attributes: [
      { attr: 'type', value: 'text' },
      { attr: 'placeholder', value: '...' },
      { attr: 'disabled', value: 'true' },
    ],
  });

  const inputColor = createElement({
    tagName: 'input',
    className: styles.inputColor,
    parent,
    attributes: [
      { attr: 'type', value: 'color' },
      { attr: 'value', value: '#79716b' },
      { attr: 'disabled', value: 'true' },
    ],
  });

  const buttonUpdateCar = createElement({
    tagName: 'button',
    className: styles.button,
    parent,
    text: 'update',
    attributes: [{ attr: 'disabled', value: 'true' }],
  });

  return [inputText, inputColor, buttonUpdateCar];
};

export const createMiddleLevelSetCars = (
  parent: HTMLElement
): ((car: Car) => void) => {
  let carDataForCreate: Car;
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapperLevel,
    parent,
  });
  const setButtons = createElements(wrapper);
  const [inputText, inputColor, buttonUpdateCar] = setButtons;
  buttonUpdateCar.addEventListener('click', () => {
    setDisabledElements(setButtons, true);
  });
  inputColor.addEventListener('change', (event: Event) =>
    handleEventUpLevel(event, carDataForCreate, inputColor)
  );

  inputText.addEventListener('input', (event: Event) =>
    handleEventUpLevel(event, carDataForCreate, inputText)
  );

  const clearInputs = (): void => {
    inputColor.value = '#79716b';
    inputText.value = '';
  };
  buttonUpdateCar.addEventListener('click', async () => {
    await stateRace.updateCar({ ...carDataForCreate });
    clearInputs();
  });
  const callback = (car: Car): void => {
    carDataForCreate = { ...car };
    setDisabledElements(setButtons, false);
    inputColor.value = car.color;
    inputText.value = car.name;
  };
  return callback;
};
