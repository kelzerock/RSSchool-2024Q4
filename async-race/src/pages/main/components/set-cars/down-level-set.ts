import { carNames } from '../../../../constants/car-names';
import { stateRace } from '../../../../state/state';
import { createElement } from '../../../../utils/create-element';
import { getRandomDataFromArray } from '../../../../utils/get-random-data-from-array';
import { randomHexColor } from '../../../../utils/random-color';
import { setDisabledElements } from '../../../../utils/set-disabled-elements';
import { mainPage } from '../../main-page';

const disabledStyle =
  'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';

const styles = {
  wrapper: 'flex flex-row gap-x-1',
  button:
    'flex items-center justify-center bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
    disabledStyle,
};

const generateCars = async (): Promise<void> => {
  const start = 0;
  const maximumCars = 100;
  let count = start;
  const step = 1;
  while (count < maximumCars) {
    const car = { name: '', color: '' };
    car.name =
      getRandomDataFromArray(carNames.model) +
      ' ' +
      getRandomDataFromArray(carNames.type);
    car.color = randomHexColor();
    await stateRace.createCar(car);
    count += step;
  }
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

  generateButton.addEventListener('click', async () => {
    setDisabledElements([generateButton], true);
    await generateCars();
    mainPage();
    setDisabledElements([generateButton], false);
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
