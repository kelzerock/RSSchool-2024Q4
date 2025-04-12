import { URL_API } from '../../constants/api';
import type { Success } from '../../types/success';

export const deleteCar = async (id: number): Promise<undefined | Success> => {
  const data = await fetch(`${URL_API}/garage/${id}`, {
    method: 'DELETE',
  });

  if (data.ok) {
    return { success: true };
  }
};
