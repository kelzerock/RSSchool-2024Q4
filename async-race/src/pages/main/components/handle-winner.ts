import { createModal } from '../../../components/modal/modal';
import { type Car } from '../../../state/state';
import { isWinner } from '../../../utils/is-winner';
import { createWinner } from '../../../utils/request/create-winner';
import { getWinners } from '../../../utils/request/get-winners';
import { updateWinner } from '../../../utils/request/update-winner';

const INITIAL_WIN_COUNT = 1; // Вместо firstWin
const MILLISECONDS_IN_SECOND = 1000;
const FIXED = 2;
const msToSeconds = (time: number): number =>
  Number.parseFloat((time / MILLISECONDS_IN_SECOND).toFixed(FIXED));

export const handleWinner = async (
  car: Car,
  duration: number
): Promise<void> => {
  try {
    const durationInSeconds = msToSeconds(duration);
    createModal(car, duration);
    const allWinners = (await getWinners()) || [];
    const winner = allWinners.find((winner) => winner.id === car.id);
    if (winner) {
      const bestTime = Math.min(durationInSeconds, winner.time);
      const newWinner = {
        ...winner,
        time: bestTime,
        wins: winner.wins + INITIAL_WIN_COUNT,
      };
      await updateWinner(newWinner);
    } else {
      const newWinner = {
        id: car.id,
        wins: INITIAL_WIN_COUNT,
        time: durationInSeconds,
      };
      if (isWinner(newWinner)) {
        await createWinner(newWinner);
      }
    }
  } catch (error) {
    console.log('Error while handle winner', error);
  }
};
