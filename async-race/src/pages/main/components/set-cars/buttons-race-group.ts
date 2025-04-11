import { stateRace } from '../../../../state/state';
import { createElement } from '../../../../utils/create-element';
import { cssButton } from '../../../../global-styles';
import { handleClickResetButton } from './handle-functions/handle-click-reset-button';
import { handleClickGenerateButton } from './handle-functions/handle-click-generate-button';
import { handleClickRaceButton } from './handle-functions/handle-click-race-button';

const styles = {
  wrapper: 'flex flex-row gap-x-1',
};

const dataForButtons = [
  {
    text: 'race',
  },
  {
    text: 'reset',
    attributes: [{ attr: 'disabled', value: '' }],
  },
  {
    text: 'generate cars',
  },
];

const createButtons = (parent: HTMLElement): HTMLButtonElement[] => {
  const [raceButton, resetButton, generateButton] = dataForButtons.map(
    (element) => {
      return createElement({
        tagName: 'button',
        parent,
        text: element.text,
        className: cssButton,
        attributes: element.attributes || [],
      });
    }
  );

  raceButton.addEventListener('click', () => {
    handleClickRaceButton(raceButton, resetButton);
  });

  resetButton.addEventListener('click', () =>
    handleClickResetButton(resetButton, raceButton)
  );

  generateButton.addEventListener(
    'click',
    async () => await handleClickGenerateButton(generateButton)
  );

  return [raceButton, resetButton];
};

export const createButtonsRaceGroup = (parent: HTMLElement): void => {
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  const [raceButton, resetButton] = createButtons(wrapper);
  stateRace.buttonsForRace.resetRace = resetButton;
  stateRace.buttonsForRace.startRace = raceButton;
};
