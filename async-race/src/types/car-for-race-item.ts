import type { Car } from './car';

export type CarForRaceItem = {
  car: Car;
  parent: HTMLElement;
  callback?: (car: Car) => void;
};
