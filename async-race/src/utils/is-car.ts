import type { Car } from '../types/car';
import { isCarForCreate } from './is-car-for-create';

export const isCar = (car: unknown): car is Car => {
  return isCarForCreate(car) && 'id' in car && typeof car.id === 'number'
    ? true
    : false;
};
