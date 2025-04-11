import { stateRace } from '../../../../../state/state';
import type { dataForPromise } from '../../../../../types/data-for-promise';
import type { DataForRace } from '../../../../../types/data-for-race';
import { stopStartEngine } from '../../../../../utils/request/stop-start-engine';
import { toggleDisabledStatus } from '../../../../../utils/toggle-disabled-status';
import { handleWinnerPromise } from './handle-winner-promise';
import { overwatchToRace } from '../overwatch-to-race';

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

  new Promise((resolve: (value: dataForPromise) => void) => {
    carsVelocityForRace.forEach((element, index) =>
      overwatchToRace(element, index, resolve)
    );
  }).then((data: dataForPromise): void => handleWinnerPromise(data));
};
