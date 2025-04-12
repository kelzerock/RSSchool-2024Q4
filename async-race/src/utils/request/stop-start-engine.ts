import { URL_API } from '../../constants/api';
import type { Car } from '../../types/car';
import type { Success } from '../../types/success';
import { isVelocityData } from '../is-velocity-data';
import { driveModeEngine } from './drive-mode-engine';

const controllers: Map<number, AbortController> = new Map<
  number,
  AbortController
>();

type direction = 'started' | 'stopped';

const startEngine = async (
  car: Car,
  direction: direction
): Promise<
  | {
      duration: number;
      promise: Promise<undefined | string | Success>;
    }
  | undefined
> => {
  const controller = new AbortController();
  controllers.set(car.id, controller);
  const response = await fetch(
    `${URL_API}/engine?id=${car.id}&status=${direction}`,
    { method: 'PATCH' }
  );
  if (response.ok) {
    const data = await response.json();
    if (isVelocityData(data)) {
      const duration = data.distance / data.velocity;
      const promise = driveModeEngine(car, controller);
      return { promise, duration };
    }
  }
};

const stopEngine = async (
  car: Car,
  direction: direction
): Promise<
  | {
      duration: number;
      promise: Promise<undefined | string | Success>;
    }
  | undefined
> => {
  const controller = controllers.get(car.id);
  if (controller) {
    controller.abort();
    const response = await fetch(
      `${URL_API}/engine?id=${car.id}&status=${direction}`,
      { method: 'PATCH' }
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    controllers.delete(car.id);
  }
};

export const stopStartEngine = async (
  car: Car,
  direction: direction
): Promise<
  | {
      duration: number;
      promise: Promise<undefined | string | Success>;
    }
  | undefined
> => {
  if (direction === 'started') {
    return await startEngine(car, direction);
  } else if (direction === 'stopped') {
    return await stopEngine(car, direction);
  }
};
