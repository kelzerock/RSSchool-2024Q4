import { cssButton, cssInputBlock } from '../../../../global-styles';
import type { Car } from '../../../../types/car';
import { createElement } from '../../../../utils/create-element';
import { handleEventInput } from './handle-functions/handle-event-input';
import { handleClickButtonUpdate } from './handle-functions/handle-click-button-update';
import { callbackForUpdateButton } from './handle-functions/callback-for-update-button';

export type DataToCreateElement<T extends keyof HTMLElementTagNameMap> = {
  tagName: T;
  className?: string;
  parent?: HTMLElement;
  text?: string;
  attributes?: { attr: string; value: string }[];
};

const dataForCreateElements: [
  DataToCreateElement<'input'>,
  DataToCreateElement<'input'>,
  DataToCreateElement<'button'>,
] = [
  {
    tagName: 'input',
    className: cssInputBlock.inputText,
    attributes: [
      { attr: 'type', value: 'text' },
      { attr: 'placeholder', value: '...' },
      { attr: 'disabled', value: 'true' },
    ],
  },
  {
    tagName: 'input',
    className: cssInputBlock.inputColor,
    attributes: [
      { attr: 'type', value: 'color' },
      { attr: 'value', value: '#79716b' },
      { attr: 'disabled', value: 'true' },
    ],
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'update',
    attributes: [{ attr: 'disabled', value: 'true' }],
  },
];

const createElements = (
  parent: HTMLElement
): [HTMLInputElement, HTMLInputElement, HTMLButtonElement] => {
  const inputText = createElement({ ...dataForCreateElements[0], parent });
  const inputColor = createElement({ ...dataForCreateElements[1], parent });
  const buttonUpdateCar = createElement({
    ...dataForCreateElements[2],
    parent,
  });

  return [inputText, inputColor, buttonUpdateCar];
};

export const createUpdateGroupSet = (
  parent: HTMLElement
): ((car: Car) => void) => {
  let carDataForCreate: Car;

  const wrapper = createElement({
    tagName: 'div',
    className: cssInputBlock.wrapperLevel,
    parent,
  });

  const setButtons = createElements(wrapper);
  const [inputText, inputColor, buttonUpdateCar] = setButtons;

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
