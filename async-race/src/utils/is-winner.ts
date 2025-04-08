import { type Winner } from '../state/state';

export const isWinner = (data: unknown): data is Winner => {
  return data &&
    typeof data === 'object' &&
    'id' in data &&
    'wins' in data &&
    'time' in data &&
    typeof data.id === 'number' &&
    typeof data.wins === 'number' &&
    typeof data.time === 'number'
    ? true
    : false;
};
