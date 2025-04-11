import { carNames } from '../constants/car-names';
import { getRandomDataFromArray } from './get-random-data-from-array';

export const generateRandomCarName = (): string => {
  return (
    getRandomDataFromArray(carNames.model) +
    ' ' +
    getRandomDataFromArray(carNames.type)
  );
};
