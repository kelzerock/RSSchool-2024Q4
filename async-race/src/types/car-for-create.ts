import type { Car } from './car';

export type CarForCreate = Omit<Car, 'id'>;
