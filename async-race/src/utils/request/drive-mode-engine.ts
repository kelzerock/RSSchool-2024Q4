import { URL_API } from '../../constants/api';
import { type Car } from '../../state/state';

export const driveModeEngine = async (
  car: Car,
  controller: AbortController
): Promise<undefined | string | { success: boolean }> => {
  const stopCarCode = 500;

  const fetchPromise = (async (): Promise<
    undefined | string | { success: boolean }
  > => {
    try {
      const response = await fetch(
        `${URL_API}/engine?id=${car.id}&status=drive`,
        {
          method: 'PATCH',
          signal: controller.signal,
        }
      );
      if (response.ok) {
        return await response.json();
      } else if (response.status === stopCarCode) {
        return 'car need stop';
      } else {
        console.warn('response get with mistake');
      }
    } catch (error) {
      handleError(error);
    }
  })();

  return fetchPromise;
};

function handleError(error: unknown): void {
  if (error instanceof DOMException && error.name === 'AbortError') {
    console.log('Fetch aborted');
    return;
  }
  console.error('Network error or unexpected issue', error);
}
