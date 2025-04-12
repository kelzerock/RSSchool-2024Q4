import { createElement } from '../../../../utils/create-element';
import { createBoxButtonsForCar } from './create-box-buttons-for-car';
import { createCarImage } from './create-car-image';

const styles = {
  raceBox: 'flex relative border-dashed border-b-2 w-full',
};

export const createRacePathWithControlButtons = (
  parent: HTMLElement
): HTMLElement[] => {
  const [startCarEngine, stopCarEngine] = createBoxButtonsForCar(parent);

  const raceBox = createElement({
    tagName: 'div',
    parent,
    className: styles.raceBox,
  });
  const carImg = createCarImage(raceBox);

  return [startCarEngine, stopCarEngine, raceBox, carImg];
};
