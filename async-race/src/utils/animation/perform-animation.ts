import type { TypesForAnimation } from '../../state/state';
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
