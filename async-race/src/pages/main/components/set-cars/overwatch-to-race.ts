import { stateRace } from '../../../../state/state';
import type { dataForPromise } from '../../../../types/data-for-promise';
import { performAnimation } from '../../../../utils/animation/perform-animation';
import { isSuccess } from '../../../../utils/is-success';
import { toggleDisabledStatus } from '../../../../utils/toggle-disabled-status';

export const overwatchToRace = async (
  element: PromiseSettledResult<
    | {
        duration: number;
        promise: Promise<
          | string
          | {
              success: boolean;
            }
          | undefined
        >;
      }
    | undefined
  >,
  index: number,
  resolve: (value: dataForPromise) => void
): Promise<undefined | dataForPromise> => {
  if (element.status === 'fulfilled') {
    const idCar = stateRace.viewCars[index].id;
    const elements = stateRace.viewStateModels.get(idCar);
    const data = element.value;

    if (elements && data) {
      toggleDisabledStatus([elements.startButton], [elements.stopButton]);
      elements.cancelFlag.flag = false;
      const promise = performAnimation(elements, data);
      const newInfo = await data.promise;

      if (isSuccess(newInfo) && !elements.cancelFlag.flag) {
        resolve({ id: idCar, duration: data.duration, promise });
      }
    }
  }
  return undefined;
};
