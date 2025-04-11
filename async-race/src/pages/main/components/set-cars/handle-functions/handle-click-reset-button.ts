import { stateRace } from '../../../../../state/state';
import { toggleDisabledStatus } from '../../../../../utils/toggle-disabled-status';

export const handleClickResetButton = (
  resetButton: HTMLButtonElement,
  raceButton: HTMLButtonElement
): void => {
  toggleDisabledStatus([resetButton], [raceButton]);
  stateRace.buttonsForRace.readyToRace = false;

  stateRace.viewStateModels.forEach((car) => {
    car.stopButton.click();
  });
};
