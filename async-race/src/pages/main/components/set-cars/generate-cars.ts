import {
  MAX_ATTEMPT_TO_REQUEST,
  MAX_CARS_GENERATE,
  START_COUNT,
  STEP,
} from '../../../../constants/global-constants';
import { stateRace } from '../../../../state/state';
import { generateRandomCar } from '../../../../utils/generate-random-car';
import { isCar } from '../../../../utils/is-car';
import { createCar } from '../../../../utils/request/create-car';

export const generateCars = async (): Promise<void> => {
  let count = START_COUNT;
  let counterAttempt = START_COUNT;
  while (count < MAX_CARS_GENERATE && counterAttempt < MAX_ATTEMPT_TO_REQUEST) {
    try {
      const newCar = await createCar(generateRandomCar());
      if (isCar(newCar)) {
        stateRace.addNewCar(newCar);
        count += STEP;
      }
    } catch {
      counterAttempt += STEP;
    }
  }
  if (counterAttempt >= MAX_ATTEMPT_TO_REQUEST) {
    console.error("server doesn't response, check it!");
  }
};
