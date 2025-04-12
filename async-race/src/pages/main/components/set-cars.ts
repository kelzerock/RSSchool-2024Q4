import type { Car } from '../../../types/car';
import { createElement } from '../../../utils/create-element';
import { createButtonsRaceGroup } from './set-cars/buttons-race-group';
import { createUpdateGroupSet } from './set-cars/buttons-update-group';
import { createUpLevelSetCars } from './set-cars/buttons-create-group';

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
  const callback = createUpdateGroupSet(wrapperForSetCars);
  createButtonsRaceGroup(wrapperForSetCars);
  return callback;
};
