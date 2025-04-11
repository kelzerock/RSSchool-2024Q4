import { stateRace } from '../../../../../state/state';
import type { dataForPromise } from '../../../../../types/data-for-promise';
import { handleWinner } from '../../handle-winner';

export const handleWinnerPromise = (data: dataForPromise): void => {
  const car = stateRace.state.garage.find((car) => car.id === data.id);
  if (car) {
    data.promise.then(() => {
      handleWinner(car, data.duration);
    });
  }
};
