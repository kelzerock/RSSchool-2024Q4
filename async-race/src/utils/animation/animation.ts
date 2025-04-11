import type { Draw } from '../../types/draw';

type AnimationData = {
  timing: (fraction: number) => number;
  draw: Draw;
  durationData: {
    duration: number;
    promise: Promise<undefined | string | { success: boolean }>;
  };
  element: HTMLElement;
  box: HTMLElement;
  cancelFlag: { flag: boolean };
};

const endOfFraction = 1;

export const animate = (animationData: AnimationData): Promise<void> => {
  return new Promise((resolve) => {
    const { timing, draw, durationData, element, box, cancelFlag } =
      animationData;
    const fullWidth = 100;
    let start = performance.now();
    const width =
      fullWidth - (element.offsetWidth / box.offsetWidth) * fullWidth;
    let aborted = false;
    durationData.promise.then((result) => {
      if (result === 'car need stop') {
        aborted = true;
      }
    });
    const step = (timestamp: number): void => {
      if (start === null) {
        start = timestamp;
      }
      if (aborted || cancelFlag.flag) {
        return;
      }
      const elapsed = timestamp - start;
      let timeFraction = elapsed / durationData.duration;
      if (timeFraction > endOfFraction) {
        timeFraction = endOfFraction;
      }
      const progress = timing(timeFraction);
      draw(progress * width, element);
      if (timeFraction < endOfFraction) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
};
