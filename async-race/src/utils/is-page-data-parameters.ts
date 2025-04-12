import type { PageDataParameters } from '../types/page-data-parameters';

export const isPageDataParameters = (
  data: unknown
): data is PageDataParameters => {
  return data &&
    typeof data === 'object' &&
    'page' in data &&
    typeof data.page === 'number' &&
    'limit' in data &&
    typeof data.limit === 'number' &&
    'sort' in data &&
    'order' in data &&
    typeof data.sort === 'string' &&
    ['id', 'wins', 'time'].includes(data.sort) &&
    typeof data.order === 'string' &&
    ['ASC', 'DESC'].includes(data.order)
    ? true
    : false;
};
