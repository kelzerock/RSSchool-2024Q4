import type { Success } from './success';

export type DataForRace = Promise<
  | {
      duration: number;
      promise: Promise<string | Success | undefined>;
    }
  | undefined
>;
