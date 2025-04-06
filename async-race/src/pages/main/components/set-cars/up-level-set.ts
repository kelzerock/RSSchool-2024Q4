import { stateRace } from '../../../../state/state';
import { createElement } from '../../../../utils/create-element';
import { handleEventUpLevel, type DataCar } from './handle-event-up-level';

const styles = {
  wrapperLevel: 'flex flex-row gap-x-2 items-center ',
  inputText:
    'w-50 border-red-950 border-3 rounded-md bg-red-50 text-red-950 py-1 px-2 outline-none',
  inputColor: 'colorInput',
  button:
    'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer',
};

const createElements = (
  parent: HTMLElement,
  car: DataCar
): [HTMLInputElement, HTMLInputElement, HTMLButtonElement] => {
  const inputText = createElement({
    tagName: 'input',
    className: styles.inputText,
    parent,
    attributes: [
      { attr: 'type', value: 'text' },
      { attr: 'placeholder', value: 'name car' },
    ],
  });

  const inputColor = createElement({
    tagName: 'input',
    className: styles.inputColor,
    parent,
    attributes: [
      { attr: 'type', value: 'color' },
      { attr: 'value', value: car.color },
    ],
  });

  const buttonCreateCar = createElement({
    tagName: 'button',
    className: styles.button,
    parent,
    text: 'create',
  });

  return [inputText, inputColor, buttonCreateCar];
};

export const createUpLevelSetCars = (parent: HTMLElement): void => {
  const initialData: DataCar = { name: '', color: '#ffffff' };
  const carDataForCreate: DataCar = { ...initialData };

  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapperLevel,
    parent,
  });

  const [inputText, inputColor, buttonCreateCar] = createElements(
    wrapper,
    carDataForCreate
  );

  inputColor.addEventListener('change', (event: Event) =>
    handleEventUpLevel(event, carDataForCreate, inputColor)
  );

  inputText.addEventListener('input', (event: Event) =>
    handleEventUpLevel(event, carDataForCreate, inputText)
  );

  const clearInputs = (): void => {
    inputColor.value = initialData.color;
    inputText.value = initialData.name;
    carDataForCreate.color = initialData.color;
    carDataForCreate.name = initialData.name;
  };

  buttonCreateCar.addEventListener('click', () => {
    stateRace.createCar(carDataForCreate);
    clearInputs();
  });
};
