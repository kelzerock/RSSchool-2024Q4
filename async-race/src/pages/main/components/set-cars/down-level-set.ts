import { carNames } from '../../../../constants/car-names';
import { stateRace, type TypesForAnimation } from '../../../../state/state';
import { createElement } from '../../../../utils/create-element';
import { getRandomDataFromArray } from '../../../../utils/get-random-data-from-array';
import { randomHexColor } from '../../../../utils/random-color';
import { stopStartEngine } from '../../../../utils/request/stop-start-engine';
import { setDisabledElements } from '../../../../utils/set-disabled-elements';
import { mainPage } from '../../main-page';
import { animate } from '../../../../utils/animation/animation';
import { linear } from '../../../../utils/animation/timing';
import { drawAnimate } from '../../../../utils/animation/draw-animation';
import { createModal } from '../../../../components/modal/modal';

type dataForRace = {
  id: number;
  promise: Promise<
    | undefined
    | {
        duration: number;
        promise: Promise<undefined | string | { success: boolean }>;
      }
  >;
};

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

const checkSuccess = (element: unknown): element is { success: boolean } => {
  return element &&
    typeof element === 'object' &&
    'success' in element &&
    element.success
    ? true
    : false;
};

function performAnimation(
  elements: TypesForAnimation,
  data: {
    duration: number;
    promise: Promise<
      | undefined
      | string
      | {
          success: boolean;
        }
    >;
  }
): void {
  animate({
    timing: linear,
    draw: drawAnimate,
    durationData: data,
    element: elements.element,
    box: elements.box,
    cancelFlag: elements.cancelFlag,
  });
}

const handleRaceClick = async (): Promise<void> => {
  const dataPromises: dataForRace[] = [];
  stateRace.viewCars.forEach((car) => {
    dataPromises.push({ id: car.id, promise: stopStartEngine(car, 'started') });
  });
  const info = await Promise.allSettled(dataPromises);
  new Promise((resolve) => {
    info.forEach(async (element) => {
      if (element.status === 'fulfilled' && typeof element.value === 'object') {
        const elements = stateRace.viewStateModels.get(element.value.id);
        const data = await element.value.promise;
        if (elements && data) {
          setDisabledElements([elements.startButton], true);
          setDisabledElements([elements.stopButton], false);
          elements.cancelFlag.flag = false;
          performAnimation(elements, data);
          const newInfo = await data.promise;
          if (checkSuccess(newInfo)) {
            resolve({ id: element.value.id, duration: data.duration });
          }
        }
      }
    });
  }).then((data) => {
    if (
      data &&
      typeof data === 'object' &&
      'id' in data &&
      'duration' in data &&
      typeof data.duration === 'number'
    ) {
      const car = stateRace.state.garage.find((car) => car.id === data.id);
      if (car) {
        createModal(car, data.duration);
      }
    }
  });
};

const handleResetClick = async (): Promise<void> => {
  stateRace.viewStateModels.forEach((car) => {
    car.stopButton.click();
  });
};

const handleClickGenerateButton = async (
  button: HTMLElement
): Promise<void> => {
  setDisabledElements([button], true);
  await generateCars();
  mainPage();
  setDisabledElements([button], false);
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
    attributes: [{ attr: 'disabled', value: '' }],
  });
  const generateButton = createElement({
    tagName: 'button',
    parent,
    text: 'generate cars',
    className: styles.button,
  });
  raceButton.addEventListener('click', () => {
    handleRaceClick();
    stateRace._activeStopEngineButtons = stateRace.viewCars.length;
    console.log(stateRace._activeStopEngineButtons);
    setDisabledElements([raceButton], true);
    setDisabledElements([resetButton], false);
  });
  resetButton.addEventListener('click', async () => {
    setDisabledElements([resetButton], true);
    await handleResetClick();
    setDisabledElements([raceButton], false);
  });
  generateButton.addEventListener('click', async () => {
    await handleClickGenerateButton(generateButton);
  });
  return [raceButton, resetButton];
};

export const downLevelSet = (parent: HTMLElement): void => {
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  const [raceButton, resetButton] = createButtons(wrapper);
  stateRace.buttonsForRace.resetRace = resetButton;
  stateRace.buttonsForRace.startRace = raceButton;
};
