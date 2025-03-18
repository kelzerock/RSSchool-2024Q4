import type { ApplicationState } from "../../state/types";
import { getRandomColor } from "../../utils/random-color";

type correctStateType = {
  proportion: number;
  description: string;
  color: string;
}[];

export const getInfoOfOptionsWithProportion = (
  state: ApplicationState,
): correctStateType => {
  const correctState = state.options
    .map((option) => {
      return {
        proportion: Number.parseFloat(option.weight),
        description: option.description,
        color: getRandomColor(),
      };
    })
    .filter(
      (option) =>
        !Number.isNaN(option.proportion) && option.description.length > 0,
    );

  const sum = correctState.reduce(
    (acc, option) => (acc += option.proportion),
    0,
  );

  return correctState
    .map((option) => {
      return { ...option, proportion: option.proportion / sum };
    })
    .sort(() => Math.random() - 0.5);
};
