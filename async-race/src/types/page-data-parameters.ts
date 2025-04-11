import type { Order } from '../enums/order';
import type { Sort } from '../enums/sort';

export type pageDataParameters = {
  page: number;
  limit: number;
  sort: Sort;
  order: Order;
};
