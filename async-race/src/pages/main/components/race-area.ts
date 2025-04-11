import { type Car, stateRace } from '../../../state/state';
import { animate } from '../../../utils/animation/animation';
import { draw } from '../../../utils/animation/draw-animation';
import { linear } from '../../../utils/animation/timing';
import { createElement } from '../../../utils/create-element';
import { handleName } from '../../../utils/handle-name';
import { deleteWinner } from '../../../utils/request/delete-winner';
import { getWinners } from '../../../utils/request/get-winners';
import { stopStartEngine } from '../../../utils/request/stop-start-engine';
import { setDisabledElements } from '../../../utils/set-disabled-elements';

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
  carImg:
    'absolute top-[0px] left-[0px] w-[40px] bottom-[3px] rounded-tl-[15px] rounded-tr-[40px] relative',
  finishLine:
    'absolute w-[46px] h-full right-[0px] border-l-2 border-dotted border-white',
};

type CarForRaceItem = {
  car: Car;
  parent: HTMLElement;
  callback?: (car: Car) => void;
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

const createWheels = (parent: HTMLElement): void => {
  createElement({
    tagName: 'div',
    parent: parent,
    className:
      'w-[14px] h-[14px] bg-stone-950 rounded-full -bottom-[5px] left-[3px] absolute border-amber-800 border-2',
  });

  createElement({
    tagName: 'div',
    parent: parent,
    className:
      'w-[14px] h-[14px] bg-stone-950 rounded-full -bottom-[5px] right-[3px] absolute border-amber-800 border-2',
  });
};

const createElementsForMiddleLevel = (parent: HTMLElement): HTMLElement[] => {
  const boxForButtons = createElement({
    tagName: 'div',
    parent,
    className: styles.boxForButtons,
  });
  const startCarEngine = createElement({
    tagName: 'button',
    text: 'A',
    parent: boxForButtons,
    className: styles.button,
  });
  const stopCarEngine = createElement({
    tagName: 'button',
    text: 'B',
    parent: boxForButtons,
    className: styles.button,
    attributes: [{ attr: 'disabled', value: '' }],
  });
  const raceBox = createElement({
    tagName: 'div',
    parent,
    className: styles.raceBox,
  });
  const carImg = createElement({
    tagName: 'span',
    parent: raceBox,
    className: styles.carImg,
  });
  createWheels(carImg);
  createElement({
    tagName: 'div',
    parent: raceBox,
    className: styles.finishLine,
  });

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
