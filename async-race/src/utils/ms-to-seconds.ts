import { FIXED, MILLISECONDS_IN_SECOND } from '../constants/global-constants';

export const msToSeconds = (time: number): number =>
  Number.parseFloat((time / MILLISECONDS_IN_SECOND).toFixed(FIXED));
