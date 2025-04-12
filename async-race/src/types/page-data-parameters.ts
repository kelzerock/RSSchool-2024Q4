import type { Order } from '../enums/order';
import type { Sort } from '../enums/sort';

export type PageDataParameters = {
  page: number;
  limit: number;
  sort: Sort;
  order: Order;
};
