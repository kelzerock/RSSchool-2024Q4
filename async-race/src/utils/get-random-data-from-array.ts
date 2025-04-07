import { getRandomNumber } from './get-random-number';

export const getRandomDataFromArray = <T>(array: T[]): T => {
  const offset = 1;
  const randomPosition = getRandomNumber(array.length - offset);
  return array[randomPosition];
};
