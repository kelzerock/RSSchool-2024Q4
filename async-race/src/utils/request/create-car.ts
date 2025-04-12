import { URL_API } from '../../constants/api';
import type { Car } from '../../types/car';
import type { CarForCreate } from '../../types/car-for-create';
import { isCar } from '../is-car';

export const createCar = async (
  car: CarForCreate
): Promise<Car | undefined> => {
  const data = await fetch(
    `${URL_API}/garage`,

    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    }
  );
  if (data.ok) {
    const carInfo = await data.json();
    if (isCar(carInfo)) {
      return carInfo;
    } else {
      console.warn("Attention, your data don't equal need format data!");
    }
  }
};
