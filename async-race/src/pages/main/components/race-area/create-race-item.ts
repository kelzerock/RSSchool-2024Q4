import type { Car } from '../../../../types/car';
import { createElement } from '../../../../utils/create-element';
import { createMiddleLevelRace } from './create-middle-level-race';
import { createUpLevelRace } from './create-up-level-race';

const styles = {
  raceItem: 'flex flex-col gap-2',
  upLevelRace: 'flex gap-x-2',
  middleLevelRace: 'flex gap-x-2',
};

const dataForElements = [
  {
    className: styles.upLevelRace,
  },
  {
    className: styles.middleLevelRace,
  },
];

export const raceItem = (
  car: Car,
  parent: HTMLElement,
  callback: (car: Car) => void
): void => {
  const mainRaceItem = createElement({
    tagName: 'div',
    parent,
    className: styles.raceItem,
  });

  const [upLevelRace, middleLevelRace] = dataForElements.map((element) =>
    createElement({
      tagName: 'div',
      parent: mainRaceItem,
      ...element,
    })
  );

  createUpLevelRace({ parent: upLevelRace, car, callback });
  createMiddleLevelRace({ parent: middleLevelRace, car });
};
