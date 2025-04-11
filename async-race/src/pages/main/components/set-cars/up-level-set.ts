import { stateRace } from '../../../../state/state';
import type { CarForCreate } from '../../../../types/car-for-create';
import { createElement } from '../../../../utils/create-element';
import { mainPage } from '../../main-page';
import { handleEventInput } from './handle-functions/handle-event-input';

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
  car: CarForCreate
): [HTMLInputElement, HTMLInputElement, HTMLButtonElement] => {
  const inputText = createElement({
    tagName: 'input',
    className: styles.inputText,
    parent,
    attributes: [
      { attr: 'type', value: 'text' },
      { attr: 'value', value: car.name },
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

const createCarStorage = 'createCarStorage';
const saveData = (data: CarForCreate): void => {
  localStorage.setItem(createCarStorage, JSON.stringify(data));
};

export const createUpLevelSetCars = (parent: HTMLElement): void => {
  const data: string | null = localStorage.getItem(createCarStorage);
  const initialData: CarForCreate = { name: '', color: '#ffffff' };
  const carDataForCreate: CarForCreate = { ...initialData };
  if (data) {
    const { name, color } = JSON.parse(data);
    carDataForCreate.color = color;
    carDataForCreate.name = name;
  }
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapperLevel,
    parent,
  });
  const [inputText, inputColor, buttonCreateCar] = createElements(
    wrapper,
    carDataForCreate
  );
  inputColor.addEventListener('change', (event: Event) => {
    handleEventInput(event, carDataForCreate, inputColor);
    saveData(carDataForCreate);
  });
  inputText.addEventListener('input', (event: Event) => {
    handleEventInput(event, carDataForCreate, inputText);
    saveData(carDataForCreate);
  });
  const clearInputs = (): void => {
    inputColor.value = initialData.color;
    inputText.value = initialData.name;
    carDataForCreate.color = initialData.color;
    carDataForCreate.name = initialData.name;
    saveData(carDataForCreate);
  };

  buttonCreateCar.addEventListener('click', async () => {
    await stateRace.createCar(carDataForCreate);
    clearInputs();
    mainPage();
  });
};
