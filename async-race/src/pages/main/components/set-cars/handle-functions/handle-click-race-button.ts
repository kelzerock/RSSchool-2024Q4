import { stateRace } from '../../../../../state/state';
import type { DataForRace } from '../../../../../types/data-for-race';
import { stopStartEngine } from '../../../../../utils/request/stop-start-engine';
import { toggleDisabledStatus } from '../../../../../utils/toggle-disabled-status';
import { handleWinnerPromise } from './handle-winner-promise';
import { overwatchToRace } from '../overwatch-to-race';
import type { DataForPromise } from '../../../../../types/data-for-promise';

export const handleClickRaceButton = async (
  raceButton: HTMLButtonElement,
  resetButton: HTMLButtonElement
): Promise<void> => {
  stateRace.buttonsForRace.readyToRace = true;
  stateRace._activeStopEngineButtons = stateRace.viewCars.length;
  toggleDisabledStatus([raceButton], [resetButton]);

  const carsPromises: DataForRace[] = [];
  stateRace.viewCars.forEach((car) => {
    carsPromises.push(stopStartEngine(car, 'started'));
  });

  const carsVelocityForRace = await Promise.allSettled(carsPromises);

  new Promise((resolve: (value: DataForPromise) => void) => {
    carsVelocityForRace.forEach((element, index) =>
      overwatchToRace(element, index, resolve)
    );
  }).then((data: DataForPromise): void => handleWinnerPromise(data));
};
