import { type Car, stateRace } from '../../../state/state';
import { createElement } from '../../../utils/create-element';
import { stopStartEngine } from '../../../utils/request/stop-start-engine';

const styles = {
  raceArea:
    'flex border-2 border-red-950 p-2 my-1 bg-amber-800 flex-col gap-2 rounded-md',
  raceItem: 'flex flex-col gap-2',
  upLevelRace: 'flex gap-x-2',
  middleLevelRace: 'flex gap-x-2',
  button:
    'flex bg-red-800 rounded-md px-2 py-1 text-xs font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 hover:cursor-pointer',
  boxForButtons: 'flex flex-row gap-x-1',
  raceBox: 'flex relative border-dashed border-b-2 w-full',
  carImg: 'absolute top-[0px] left-[0px] w-[40px] bottom-[3px]',
  finishLine:
    'absolute w-[40px] h-full right-[0px] border-l-2 border-dotted border-white',
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
  const garageCars = stateRace.state.garage;
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
  createElement({ tagName: 'span', text: car.name, parent });
  removeCarButton.addEventListener('click', () => {
    stateRace.deleteCar(car.id);
  });
};

const createMiddleLevelRace = ({ car, parent }: CarForRaceItem): void => {
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
  });
  startCarEngine.addEventListener('click', () =>
    stopStartEngine(car, 'started')
  );
  stopCarEngine.addEventListener('click', () =>
    stopStartEngine(car, 'stopped')
  );
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
  carImg.style.background = car.color;
  createElement({
    tagName: 'div',
    parent: raceBox,
    className: styles.finishLine,
  });
};
