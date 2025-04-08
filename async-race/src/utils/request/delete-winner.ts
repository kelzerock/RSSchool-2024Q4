import { URL_API } from '../../constants/api';

const notFound = 404;

export const deleteWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${URL_API}/winners/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    console.log('winner deleted');
  }

  if (response.status === notFound) {
    console.log("winner doesn't found");
  }
};
