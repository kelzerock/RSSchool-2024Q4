import { stateRace } from '../../../../state/state';
import type { Abort } from '../../../../types/abort';
import type { CarForRaceItem } from '../../../../types/car-for-race-item';
import { stopStartEngine } from '../../../../utils/request/stop-start-engine';
import { toggleDisabledStatus } from '../../../../utils/toggle-disabled-status';
import { counterActiveStartEngineButtons } from './counter-active-start-engine-buttons';
import { createRacePathWithControlButtons } from './create-race-path-with-control-buttons';
import { handleClickStartCarEngine } from './handle-functions/handle-click-start-car-engine';

export const createMiddleLevelRace = ({
  car,
  parent,
}: CarForRaceItem): void => {
  const abort: Abort = { flag: false };

  const [startButton, stopButton, raceBox, carImg] =
    createRacePathWithControlButtons(parent);

  carImg.style.background = car.color;

  stateRace.viewStateModels.set(car.id, {
    carImg,
    raceBox,
    abort,
    car,
    startButton,
    stopButton,
  });

  startButton.addEventListener('click', async () => {
    await handleClickStartCarEngine(
      startButton,
      stopButton,
      car,
      carImg,
      raceBox,
      abort
    );
  });

  stopButton.addEventListener('click', async () => {
    counterActiveStartEngineButtons();
    toggleDisabledStatus([stopButton], [startButton]);
    abort.flag = true;
    carImg.style.left = '0px';
    await stopStartEngine(car, 'stopped');
  });
};
