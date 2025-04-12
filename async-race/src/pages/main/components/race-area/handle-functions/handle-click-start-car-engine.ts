import type { Car } from '../../../../../types/car';
import { animate } from '../../../../../utils/animation/animation';
import { draw } from '../../../../../utils/animation/draw-animation';
import { linear } from '../../../../../utils/animation/timing';
import { stopStartEngine } from '../../../../../utils/request/stop-start-engine';
import { toggleDisabledStatus } from '../../../../../utils/toggle-disabled-status';

export const handleClickStartCarEngine = async (
  startCarEngine: HTMLElement,
  stopCarEngine: HTMLElement,
  car: Car,
  carImg: HTMLElement,
  raceBox: HTMLElement,
  abort: { flag: boolean }
): Promise<void> => {
  toggleDisabledStatus([startCarEngine], [stopCarEngine]);
  abort.flag = false;
  const durationData = await stopStartEngine(car, 'started');

  if (durationData) {
    animate({
      timing: linear,
      draw,
      durationData,
      carImg,
      raceBox,
      abort,
    });
  }
};
