import type { Success } from '../../types/success';
import type { TypesForAnimation } from '../../types/types-for-animation';
import { animate } from './animation';
import { draw } from './draw-animation';
import { linear } from './timing';

export const performAnimation = (
  elements: TypesForAnimation,
  durationData: {
    duration: number;
    promise: Promise<undefined | string | Success>;
  }
): Promise<void> => {
  return animate({
    timing: linear,
    draw,
    durationData,
    ...elements,
  });
};
