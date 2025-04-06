import { URL_API } from '../../constants/api';
import { type Car } from '../../state/state';

export const driveModeEngine = async (
  car: Car,
  controller: AbortController
): Promise<undefined | string> => {
  const stopCarCode = 500;
  try {
    const response = await fetch(
      `${URL_API}/engine?id=${car.id}&status=drive`,
      {
        method: 'PATCH',
        signal: controller.signal,
      }
    );

    if (response.ok) {
      console.log('all good');
      console.log(await response.json());
    } else if (response.status === stopCarCode) {
      console.log('car need stop');
      // console.log(await response.json());
      return 'car need stop';
    } else {
      console.warn('response get with mistake');
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      console.log('Fetch aborted');
      return;
    }
    console.error('Network error or unexpected issue', error);
  }
};
