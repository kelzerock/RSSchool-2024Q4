import { type Car } from '../state/state';

export const isCar = (car: unknown): car is Car => {
  if (
    car &&
    typeof car === 'object' &&
    'name' in car &&
    'id' in car &&
    'color' in car &&
    typeof car.name === 'string' &&
    typeof car.id === 'number' &&
    typeof car.color === 'string'
  )
    return true;
  return false;
};
