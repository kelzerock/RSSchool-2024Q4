import {
  MAX_CARS_GENERATE,
  START_COUNT,
  STEP,
} from '../../../../constants/global-constants';
import { stateRace } from '../../../../state/state';
import { generateRandomCar } from '../../../../utils/generate-random-car';

export const generateCars = async (): Promise<void> => {
  let count = START_COUNT;
  while (count < MAX_CARS_GENERATE) {
    await stateRace.createCar(generateRandomCar());
    count += STEP;
  }
};
