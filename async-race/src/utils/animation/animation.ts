import type { AnimationData } from '../../types/animation-data';

const endOfFraction = 1;

export const animate = (animationData: AnimationData): Promise<void> => {
  return new Promise((resolve) => {
    const { timing, draw, durationData, carImg, raceBox, abort } =
      animationData;
    const fullWidth = 100;
    let start = performance.now();
    const width =
      fullWidth - (carImg.offsetWidth / raceBox.offsetWidth) * fullWidth;
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
      if (aborted || abort.flag) {
        return;
      }
      const elapsed = timestamp - start;
      let timeFraction = elapsed / durationData.duration;
      if (timeFraction > endOfFraction) {
        timeFraction = endOfFraction;
      }
      const progress = timing(timeFraction);
      draw(progress * width, carImg);
      if (timeFraction < endOfFraction) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
};
