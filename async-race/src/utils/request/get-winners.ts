import { URL_API } from '../../constants/api';
import { type Winner } from '../../state/state';
import { isWinner } from '../is-winner';
type Sort = 'id' | 'wins' | 'time';
type Order = 'ASC' | 'DESC';
type Query = {
  page?: number;
  limit?: number;
  sort?: Sort;
  order?: Order;
};

const createQueryPath = (query: Query | undefined): null | string => {
  if (query === undefined) return null;
  const dataForString = [];
  if (query.page) {
    dataForString.push(`_page=${query.page}`);
  }
  if (query.limit) {
    dataForString.push(`_limit=${query.limit}`);
  }
  if (query.sort) {
    dataForString.push(`_sort=${query.sort}`);
  }
  if (query.order) {
    dataForString.push(`_order=${query.order}`);
  }
  return `?` + dataForString.join('&');
};

export const getWinners = async (
  query?: Query
): Promise<Winner[] | undefined> => {
  const queryPath = createQueryPath(query);

  const data = await fetch(`${URL_API}/winners${queryPath || ''}`, {
    method: 'GET',
  });

  if (data.ok) {
    const winners = await data.json();
    if (winners.every(isWinner)) {
      return winners;
    }
  }
};
