import type { CarForCreate } from '../types/car-for-create';

export const isCarForCreate = (car: unknown): car is CarForCreate => {
  return car &&
    typeof car === 'object' &&
    'name' in car &&
    'color' in car &&
    typeof car.name === 'string' &&
    typeof car.color === 'string'
    ? true
    : false;
};
