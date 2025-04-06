import { URL_API } from '../../constants/api';
import { type Car } from '../../state/state';
import { isVelocityData } from '../is-velocity-data';
import { driveModeEngine } from './drive-mode-engine';

const controllers: Map<number, AbortController> = new Map<
  number,
  AbortController
>();

export const stopStartEngine = async (
  car: Car,
  direction: 'started' | 'stopped'
): Promise<
  { duration: number; promise: Promise<undefined | string> } | undefined
> => {
  const { id } = car;
  if (direction === 'started') {
    const controller = new AbortController();
    controllers.set(id, controller);

    const response = await fetch(
      `${URL_API}/engine?id=${car.id}&status=${direction}`,
      { method: 'PATCH' }
    );
    if (response.ok) {
      const data = await response.json();
      if (isVelocityData(data)) {
        const promise = driveModeEngine(car, controller);
        const duration = data.distance / data.velocity;
        return { promise, duration };
      }
    }
  } else if (direction === 'stopped') {
    const controller = controllers.get(id);
    if (controller) {
      controller.abort();

      const response = await fetch(
        `${URL_API}/engine?id=${car.id}&status=${direction}`,
        { method: 'PATCH' }
      );
      if (response.ok) {
        return await response.json();
      }

      controllers.delete(id);
    }
  }
};
