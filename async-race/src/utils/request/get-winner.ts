import { URL_API } from '../../constants/api';
import { isWinner } from '../is-winner';

const userDoNotExist = 404;

export const getWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${URL_API}/winners/${id}`, {
    method: 'GET',
  });

  if (response.ok) {
    const winner = await response.json();
    if (isWinner(winner)) {
      console.log('winner exist');
    }
  }

  if (response.status === userDoNotExist) {
    console.log("winner doesn't exist");
  }
};
