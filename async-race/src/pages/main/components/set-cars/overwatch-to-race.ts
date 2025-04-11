import { stateRace } from '../../../../state/state';
import type { dataForPromise } from '../../../../types/data-for-promise';
import { performAnimation } from '../../../../utils/animation/perform-animation';
import { isSuccess } from '../../../../utils/is-success';
import { setDisabledElements } from '../../../../utils/set-disabled-elements';

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
): Promise<void> => {
  if (element.status === 'fulfilled') {
    const idCar = stateRace.viewCars[index].id;
    const elements = stateRace.viewStateModels.get(idCar);
    const data = element.value;
    if (elements && data) {
      setDisabledElements([elements.startButton], true);
      setDisabledElements([elements.stopButton], false);
      elements.cancelFlag.flag = false;
      const promise = performAnimation(elements, data);
      const newInfo = await data.promise;
      if (isSuccess(newInfo) && !elements.cancelFlag.flag) {
        resolve({ id: idCar, duration: data.duration, promise });
      }
    }
  }
};
