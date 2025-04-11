import { stateRace } from '../../../../../state/state';
import { setDisabledElements } from '../../../../../utils/set-disabled-elements';

export const handleClickResetButton = (
  resetButton: HTMLButtonElement,
  raceButton: HTMLButtonElement
): void => {
  setDisabledElements([resetButton], true);
  setDisabledElements([raceButton], false);
  stateRace.buttonsForRace.readyToRace = false;
  stateRace.viewStateModels.forEach((car) => {
    car.stopButton.click();
  });
};
