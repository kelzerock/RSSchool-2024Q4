import { URL_API } from '../../constants/api';
import type { Car } from '../../types/car';
import type { Success } from '../../types/success';

export const updateCar = async (car: Car): Promise<undefined | Success> => {
  const data = await fetch(`${URL_API}/garage/${car.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: car.name, color: car.color }),
  });

  if (data.ok) {
    return { success: true };
  }
};
