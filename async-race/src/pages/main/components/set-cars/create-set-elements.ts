import { cssButton, cssInputBlock } from '../../../../global-styles';
import type { DataToCreateElement } from '../../../../types/data-to-create-element';
import { createElement } from '../../../../utils/create-element';

export const dataForCreateElements: [
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
    ],
  },
  {
    tagName: 'input',
    className: cssInputBlock.inputColor,
    attributes: [{ attr: 'type', value: 'color' }],
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'update',
  },
];

export const createSetElements = (
  parent: HTMLElement,
  dataForElements: [
    DataToCreateElement<'input'>,
    DataToCreateElement<'input'>,
    DataToCreateElement<'button'>,
  ]
): [HTMLInputElement, HTMLInputElement, HTMLButtonElement] => {
  const inputText = createElement({ ...dataForElements[0], parent });
  const inputColor = createElement({ ...dataForElements[1], parent });
  const button = createElement({
    ...dataForElements[2],
    parent,
  });

  return [inputText, inputColor, button];
};
