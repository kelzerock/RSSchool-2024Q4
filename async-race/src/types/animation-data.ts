import type { Abort } from './abort';
import type { Draw } from './draw';
import type { Success } from './success';

export type AnimationData = {
  timing: (fraction: number) => number;
  draw: Draw;
  durationData: {
    duration: number;
    promise: Promise<undefined | string | Success>;
  };
  carImg: HTMLElement;
  raceBox: HTMLElement;
  abort: Abort;
};
