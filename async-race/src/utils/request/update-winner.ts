import { URL_API } from '../../constants/api';
import { type Winner } from '../../state/state';
import { isWinner } from '../is-winner';

const notFound = 404;

export const updateWinner = async (
  winner: Winner
): Promise<Winner | undefined> => {
  const response = await fetch(`${URL_API}/winners/${winner.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ wins: winner.wins, time: winner.time }),
  });

  if (response.ok) {
    const winner = await response.json();
    console.log('winner updated');
    if (isWinner(winner)) {
      return winner;
    }
  }

  if (response.status === notFound) {
    console.log('Not found winner');
  }
};
