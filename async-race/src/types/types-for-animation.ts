import type { Car } from './car';

export type TypesForAnimation = {
  element: HTMLElement;
  box: HTMLElement;
  cancelFlag: { flag: boolean };
  info: Car;
  startButton: HTMLElement;
  stopButton: HTMLElement;
};
