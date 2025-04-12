import { stateRace } from '../../../state/state';
import type { Car } from '../../../types/car';
import type { CarForRaceItem } from '../../../types/car-for-race-item';
import { animate } from '../../../utils/animation/animation';
import { draw } from '../../../utils/animation/draw-animation';
import { linear } from '../../../utils/animation/timing';
import { createElement } from '../../../utils/create-element';
import { handleName } from '../../../utils/handle-name';
import { deleteWinner } from '../../../utils/request/delete-winner';
import { getWinners } from '../../../utils/request/get-winners';
import { stopStartEngine } from '../../../utils/request/stop-start-engine';
import { setDisabledElements } from '../../../utils/set-disabled-elements';
import { createBoxButtonsForCar } from './race-area/create-box-buttons-for-car';
import { createCarImage } from './race-area/create-car-image';

const disabledStyle =
  'disabled:bg-stone-500 disabled:hover:cursor-not-allowed disabled:hover:text-stone-900 disabled:text-900';

const styles = {
  raceArea:
    'flex border-2 border-red-950 p-2 my-1 bg-amber-800 flex-col gap-2 rounded-md',
  raceItem: 'flex flex-col gap-2',
  upLevelRace: 'flex gap-x-2',
  middleLevelRace: 'flex gap-x-2',
  button:
    'flex bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer ' +
    disabledStyle,
  boxForButtons: 'flex flex-row gap-x-1',
  raceBox: 'flex relative border-dashed border-b-2 w-full',
};

export const raceArea = (
  parent: HTMLElement,
  callback: (car: Car) => void
): void => {
  const raceAreaForCars = createElement({
    tagName: 'div',
    className: styles.raceArea,
    parent,
  });
  const garageCars = stateRace.viewCars;
  stateRace._activeStopEngineButtons = garageCars.length;
  garageCars.forEach((car) => {
    raceItem(car, raceAreaForCars, callback);
  });
};

const raceItem = (
  car: Car,
  parent: HTMLElement,
  callback: (car: Car) => void
): void => {
  const mainRaceItem = createElement({
    tagName: 'div',
    parent,
    className: styles.raceItem,
  });

  const upLevelRace = createElement({
    tagName: 'div',
    parent: mainRaceItem,
    className: styles.upLevelRace,
  });
  createUpLevelRace({ parent: upLevelRace, car, callback });
  const middleLevelRace = createElement({
    tagName: 'div',
    parent: mainRaceItem,
    className: styles.middleLevelRace,
  });
  createMiddleLevelRace({ parent: middleLevelRace, car });
};

const createUpLevelRace = ({ car, parent, callback }: CarForRaceItem): void => {
  const selectCarButton = createElement({
    tagName: 'button',
    text: 'select',
    parent,
    className: styles.button,
  });
  selectCarButton.addEventListener('click', () => {
    if (callback) callback(car);
  });
  const removeCarButton = createElement({
    tagName: 'button',
    text: 'remove',
    parent,
    className: styles.button,
  });
  createElement({ tagName: 'span', text: handleName(car.name), parent });
  removeCarButton.addEventListener('click', async () => {
    await stateRace.deleteCar(car.id);
    const allWinners = (await getWinners()) || [];
    if (allWinners.some((winner) => winner.id === car.id)) {
      await deleteWinner(car.id);
    }
  });
};

const createElementsForMiddleLevel = (parent: HTMLElement): HTMLElement[] => {
  const [startCarEngine, stopCarEngine] = createBoxButtonsForCar(parent);

  const raceBox = createElement({
    tagName: 'div',
    parent,
    className: styles.raceBox,
  });
  const carImg = createCarImage(raceBox);

  return [startCarEngine, stopCarEngine, raceBox, carImg];
};

const handleClickStartCarEngine = async (
  startCarEngine: HTMLElement,
  stopCarEngine: HTMLElement,
  car: Car,
  carImg: HTMLElement,
  raceBox: HTMLElement,
  abort: { flag: boolean }
): Promise<void> => {
  setDisabledElements([startCarEngine], true);
  setDisabledElements([stopCarEngine], false);
  abort.flag = false;
  const data = await stopStartEngine(car, 'started');
  if (data) {
    animate({
      timing: linear,
      draw: draw,
      durationData: data,
      element: carImg,
      box: raceBox,
      cancelFlag: abort,
    });
  }
};

const changeStateButtonsRace = (): void => {
  const noneButtonActive = 0;
  const step = 1;
  stateRace._activeStopEngineButtons =
    stateRace._activeStopEngineButtons - step;
  if (stateRace._activeStopEngineButtons === noneButtonActive) {
    const { startRace, resetRace } = stateRace.buttonsForRace;
    if (startRace && resetRace) {
      setDisabledElements([startRace], false);
      setDisabledElements([resetRace], true);
    }
  }
};

const createMiddleLevelRace = ({ car, parent }: CarForRaceItem): void => {
  const abort = { flag: false };
  const [startCarEngine, stopCarEngine, raceBox, carImg] =
    createElementsForMiddleLevel(parent);

  carImg.style.background = car.color;
  stateRace.viewStateModels.set(car.id, {
    element: carImg,
    box: raceBox,
    cancelFlag: abort,
    info: car,
    startButton: startCarEngine,
    stopButton: stopCarEngine,
  });

  startCarEngine.addEventListener('click', async () => {
    await handleClickStartCarEngine(
      startCarEngine,
      stopCarEngine,
      car,
      carImg,
      raceBox,
      abort
    );
  });

  stopCarEngine.addEventListener('click', async () => {
    changeStateButtonsRace();
    setDisabledElements([startCarEngine], false);
    setDisabledElements([stopCarEngine], true);
    abort.flag = true;
    carImg.style.left = '0px';
    await stopStartEngine(car, 'stopped');
  });
};
