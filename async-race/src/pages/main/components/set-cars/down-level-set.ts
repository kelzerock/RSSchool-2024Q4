import { createElement } from '../../../../utils/create-element';

const createButtons = (parent: HTMLElement): HTMLButtonElement[] => {
  const raceButton = createElement({ tagName: 'button', parent, text: 'race' });
  const resetButton = createElement({
    tagName: 'button',
    parent,
    text: 'reset',
  });
  const generateButton = createElement({
    tagName: 'button',
    parent,
    text: 'generate cars',
  });

  return [raceButton, resetButton, generateButton];
};

export const downLevelSet = (parent: HTMLElement): void => {
  const [raceButton, resetButton, generateButton] = createButtons(parent);
  console.log(raceButton, resetButton, generateButton);
};
