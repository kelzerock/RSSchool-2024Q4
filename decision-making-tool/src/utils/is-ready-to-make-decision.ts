import type { ApplicationState } from "../state/types";

export const isReadyToMakeDecision = (state: ApplicationState): boolean => {
  const resultRightArray = state.options.filter(
    (option) =>
      option.description.length > 0 && Number.parseFloat(option.weight) > 0,
  );
  return resultRightArray.length > 1;
};
