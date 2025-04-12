import { stateRace } from '../../../../../state/state';
import type { Car } from '../../../../../types/car';
import { isSuccess } from '../../../../../utils/is-success';
import { getCars } from '../../../../../utils/request/get-cars';
import { updateCar } from '../../../../../utils/request/update-car';
import { mainPage } from '../../../main-page';

export const handleUpdateCar = async (car: Car): Promise<void> => {
  const response = await updateCar(car);
  if (isSuccess(response) && response.success) {
    const cars = await getCars();
    if (cars) {
      stateRace.getCars(cars);
      mainPage();
    }
  }
};
