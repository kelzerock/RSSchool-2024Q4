import { cssButton } from '../../../../global-styles';
import { stateRace } from '../../../../state/state';
import type { CarForRaceItem } from '../../../../types/car-for-race-item';
import { createElement } from '../../../../utils/create-element';
import { handleName } from '../../../../utils/handle-name';
import { isSuccess } from '../../../../utils/is-success';
import { deleteCar } from '../../../../utils/request/delete-car';
import { deleteWinner } from '../../../../utils/request/delete-winner';
import { getWinners } from '../../../../utils/request/get-winners';

const dataForButtons = [{ text: 'select' }, { text: 'remove' }];

export const createUpLevelRace = ({
  car,
  parent,
  callback,
}: CarForRaceItem): void => {
  const [selectCarButton, removeCarButton] = dataForButtons.map((element) =>
    createElement({
      tagName: 'button',
      ...element,
      parent,
      className: cssButton,
    })
  );

  createElement({ tagName: 'span', text: handleName(car.name), parent });

  selectCarButton.addEventListener('click', () => {
    if (callback) callback(car);
  });

  removeCarButton.addEventListener('click', async () => {
    const response = await deleteCar(car.id);
    if (isSuccess(response) && response.success) {
      stateRace.deleteCar(car.id);
    }
    const allWinners = (await getWinners()) || [];
    if (allWinners.some((winner) => winner.id === car.id)) {
      await deleteWinner(car.id);
    }
  });
};
