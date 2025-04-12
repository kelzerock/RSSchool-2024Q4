import type { Car } from '../../../types/car';
import { createElement } from '../../../utils/create-element';
import { createButtonsCreateGroup } from './set-cars/buttons-create-group';
import { createButtonsRaceGroup } from './set-cars/buttons-race-group';
import { createButtonsUpdateGroup } from './set-cars/buttons-update-group';

const styles = {
  wrapper: 'flex flex-col gap-y-2',
};

export const createSetCars = (parent: HTMLElement): ((car: Car) => void) => {
  const wrapperForSetCars = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  createButtonsCreateGroup(wrapperForSetCars);
  const callback = createButtonsUpdateGroup(wrapperForSetCars);
  createButtonsRaceGroup(wrapperForSetCars);
  return callback;
};
