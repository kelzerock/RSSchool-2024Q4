import { URL_API } from '../../constants/api';
import type { Car } from '../../types/car';
import { isCar } from '../is-car';

export const getCars = async (query?: {
  limit: number;
  page: number;
}): Promise<undefined | Car[]> => {
  const data = await fetch(
    `${URL_API}/garage${query ? '?_limit=' + query.limit + '&_page=' + query.page : ''}`,
    {
      method: 'GET',
    }
  );

  if (data.ok) {
    const garageCars = await data.json();
    if (garageCars) {
      return garageCars.filter(isCar);
    }
  }
};
