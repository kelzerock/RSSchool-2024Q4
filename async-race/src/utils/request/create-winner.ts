import { URL_API } from '../../constants/api';
import { type Winner } from '../../state/state';
import { isWinner } from '../is-winner';

const duplicatedID = 500;

export const createWinner = async (
  winner: Winner
): Promise<Winner | undefined> => {
  const response = await fetch(`${URL_API}/winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(winner),
  });

  if (response.ok) {
    const winner = await response.json();
    console.log('winner created');
    if (isWinner(winner)) {
      return winner;
    }
  }

  if (response.status === duplicatedID) {
    console.log('Duplicated id');
  }
};
