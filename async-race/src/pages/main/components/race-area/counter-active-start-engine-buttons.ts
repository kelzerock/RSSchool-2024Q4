import { STEP } from '../../../../constants/global-constants';
import { stateRace } from '../../../../state/state';
import { toggleDisabledStatus } from '../../../../utils/toggle-disabled-status';

export const counterActiveStartEngineButtons = (): void => {
  const noneButtonActive = 0;
  stateRace._activeStopEngineButtons =
    stateRace._activeStopEngineButtons - STEP;
  if (stateRace._activeStopEngineButtons === noneButtonActive) {
    const { startRace, resetRace } = stateRace.buttonsForRace;
    if (startRace && resetRace) {
      toggleDisabledStatus([startRace], [resetRace]);
    }
  }
};
