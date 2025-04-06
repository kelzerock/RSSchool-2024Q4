import { createElement } from '../../../../utils/create-element';

const disabledStyle =
  'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';

const styles = {
  wrapper: 'flex flex-row gap-x-1',
  button:
    'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
    disabledStyle,
};

const createButtons = (parent: HTMLElement): HTMLButtonElement[] => {
  const raceButton = createElement({
    tagName: 'button',
    parent,
    text: 'race',
    className: styles.button,
  });
  const resetButton = createElement({
    tagName: 'button',
    parent,
    text: 'reset',
    className: styles.button,
  });
  const generateButton = createElement({
    tagName: 'button',
    parent,
    text: 'generate cars',
    className: styles.button,
  });

  return [raceButton, resetButton, generateButton];
};

export const downLevelSet = (parent: HTMLElement): void => {
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  const [raceButton, resetButton, generateButton] = createButtons(wrapper);
  console.log(raceButton, resetButton, generateButton);
};
