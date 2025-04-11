import type { TypesForAnimation } from '../../types/types-for-animation';
import { animate } from './animation';
import { draw } from './draw-animation';
import { linear } from './timing';

export const performAnimation = (
  elements: TypesForAnimation,
  durationData: {
    duration: number;
    promise: Promise<
      | undefined
      | string
      | {
          success: boolean;
        }
    >;
  }
): Promise<void> => {
  return animate({
    timing: linear,
    draw,
    durationData,
    ...elements,
  });
};
