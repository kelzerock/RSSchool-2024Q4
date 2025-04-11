export type DataForRace = Promise<
  | {
      duration: number;
      promise: Promise<string | { success: boolean } | undefined>;
    }
  | undefined
>;
