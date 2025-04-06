import { type Draw } from './draw-animation';
type AnimationData = {
  timing: (fraction: number) => number;
  draw: Draw;
  durationData: {
    duration: number;
    promise: Promise<undefined | string>;
  };
  element: HTMLElement;
  box: HTMLElement;
  cancelFlag: { flag: boolean };
};

const endOfFraction = 1;

export const animate = ({
  timing,
  draw,
  durationData,
  element,
  box,
  cancelFlag,
}: AnimationData): void => {
  let start = performance.now();
  const offset = 3;
  const width = box.offsetWidth - element.offsetWidth - offset;
  let aborted = false;

  durationData.promise.then((result) => {
    console.log({ result });
    if (result === 'car need stop') {
      aborted = true;
    }
  });
  const step = (timestamp: number): void => {
    if (start === null) {
      start = timestamp;
    }
    if (aborted || cancelFlag.flag) {
      console.log('Анимация остановлена из-за кода 500');
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
    }
  };
  requestAnimationFrame(step);
};
