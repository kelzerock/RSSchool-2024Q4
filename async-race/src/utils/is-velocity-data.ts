import type { VelocityInfo } from '../types/velocity-info';

export const isVelocityData = (data: unknown): data is VelocityInfo => {
  return data &&
    typeof data === 'object' &&
    'velocity' in data &&
    typeof data.velocity === 'number' &&
    'distance' in data &&
    typeof data.distance === 'number'
    ? true
    : false;
};
