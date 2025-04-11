import type { CarForCreate } from '../types/car-for-create';
import { generateRandomCarName } from './generate-random-car-name';
import { randomHexColor } from './random-color';

export const generateRandomCar = (): CarForCreate => {
  const car = { name: '', color: '' };
  car.name = generateRandomCarName();
  car.color = randomHexColor();
  return car;
};
