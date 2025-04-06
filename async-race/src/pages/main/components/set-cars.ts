import { createElement } from '../../../utils/create-element';
import { createUpLevelSetCars } from './set-cars/up-level-set';

const styles = {
  wrapper: 'flex flex-col gap-y-2',
};

export const createSetCars = (parent: HTMLElement): void => {
  const wrapperForSetCars = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  createUpLevelSetCars(wrapperForSetCars);
};
