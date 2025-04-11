import type { Car } from '../types/car';

export const isCar = (car: unknown): car is Car => {
  return car &&
    typeof car === 'object' &&
    'name' in car &&
    'id' in car &&
    'color' in car &&
    typeof car.name === 'string' &&
    typeof car.id === 'number' &&
    typeof car.color === 'string'
    ? true
    : false;
};
