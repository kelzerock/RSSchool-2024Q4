import { URL_API } from '../../constants/api';
import {
  type Sort,
  type Order,
  stateRace,
  type Winner,
} from '../../state/state';
import { isWinner } from '../is-winner';
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

  const response = await fetch(`${URL_API}/winners${queryPath || ''}`, {
    method: 'GET',
  });

  if (response.ok) {
    const count = response.headers.get('X-Total-Count');
    if (count) {
      stateRace.countWinner = Number.parseInt(count);
    }
    const winners = await response.json();
    if (winners.every(isWinner)) {
      return winners;
    }
  }
};
