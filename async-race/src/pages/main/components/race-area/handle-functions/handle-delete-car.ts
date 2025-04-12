import { stateRace } from '../../../../../state/state';
import { isSuccess } from '../../../../../utils/is-success';
import { deleteCar } from '../../../../../utils/request/delete-car';
import { deleteWinner } from '../../../../../utils/request/delete-winner';
import { getWinners } from '../../../../../utils/request/get-winners';

export const handleDeleteCar = async (id: number): Promise<void> => {
  const response = await deleteCar(id);
  if (isSuccess(response) && response.success) {
    stateRace.deleteCar(id);
  }
  const allWinners = (await getWinners()) || [];
  if (allWinners.some((winner) => winner.id === id)) {
    await deleteWinner(id);
  }
};
