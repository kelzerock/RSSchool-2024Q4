import { stateRace } from '../../../state/state';
import type { Car } from '../../../types/car';
import type { DataToCreateElement } from '../../../types/data-to-create-element';
import { createElement } from '../../../utils/create-element';
import { raceItem } from './race-area/create-race-item';

const styles = {
  raceArea:
    'flex border-2 border-red-950 p-2 my-1 bg-amber-800 flex-col gap-2 rounded-md',
};

const dataForElements: DataToCreateElement<'div'>[] = [
  {
    tagName: 'div',
    className: styles.raceArea,
  },
];

export const raceArea = (
  parent: HTMLElement,
  callback: (car: Car) => void
): void => {
  const raceAreaForCars = createElement({
    ...dataForElements[0],
    parent,
  });

  const garageCars = stateRace.viewCars;
  stateRace._activeStopEngineButtons = garageCars.length;

  garageCars.forEach((car) => {
    raceItem(car, raceAreaForCars, callback);
  });
};
