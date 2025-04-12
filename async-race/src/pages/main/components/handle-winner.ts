import { createModal } from '../../../components/modal/modal';
import { INITIAL_WIN_COUNT } from '../../../constants/global-constants';
import { stateRace } from '../../../state/state';
import type { Car } from '../../../types/car';
import type { Winner } from '../../../types/winner';
import { msToSeconds } from '../../../utils/ms-to-seconds';
import { createWinner } from '../../../utils/request/create-winner';
import { getWinners } from '../../../utils/request/get-winners';
import { updateWinner } from '../../../utils/request/update-winner';

export const handleWinner = async (
  car: Car,
  duration: number
): Promise<Winner | undefined> => {
  try {
    if (!stateRace.buttonsForRace.readyToRace) {
      return;
    }
    const durationInSeconds = msToSeconds(duration);
    createModal(car, duration);
    const allWinners = (await getWinners()) || [];
    const winner = allWinners.find((winner) => winner.id === car.id);
    return winner
      ? await updateWinner({
          ...winner,
          time: Math.min(durationInSeconds, winner.time),
          wins: winner.wins + INITIAL_WIN_COUNT,
        })
      : await createWinner({
          id: car.id,
          wins: INITIAL_WIN_COUNT,
          time: durationInSeconds,
        });
  } catch (error) {
    console.log('Error while handle winner', error);
  }
};
