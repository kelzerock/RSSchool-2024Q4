import type { Car } from '../../../types/car';
import { createElement } from '../../../utils/create-element';
import { createButtonsRaceGroup } from './set-cars/buttons-race-group';
import { createMiddleLevelSetCars } from './set-cars/middle-level-set';
import { createUpLevelSetCars } from './set-cars/up-level-set';

const styles = {
  wrapper: 'flex flex-col gap-y-2',
};

export const createSetCars = (parent: HTMLElement): ((car: Car) => void) => {
  const wrapperForSetCars = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  createUpLevelSetCars(wrapperForSetCars);
  const callback = createMiddleLevelSetCars(wrapperForSetCars);
  createButtonsRaceGroup(wrapperForSetCars);
  return callback;
};
