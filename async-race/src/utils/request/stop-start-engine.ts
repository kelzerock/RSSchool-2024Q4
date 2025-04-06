import { URL_API } from '../../constants/api';
import { type Car } from '../../state/state';
import { driveModeEngine } from './drive-mode-engine';

const controllers: Map<number, AbortController> = new Map<
  number,
  AbortController
>();

export const stopStartEngine = async (
  car: Car,
  direction: 'started' | 'stopped'
): Promise<void> => {
  const { id } = car;
  if (direction === 'started') {
    const controller = new AbortController();
    controllers.set(id, controller);

    const response = await fetch(
      `${URL_API}/engine?id=${car.id}&status=${direction}`,
      { method: 'PATCH' }
    );
    if (response.ok) {
      console.log(await response.json());
      driveModeEngine(car, controller);
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
        console.log(await response.json());
      }

      controllers.delete(id);
    }
  }
};
