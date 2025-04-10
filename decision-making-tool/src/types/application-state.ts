import { type OptionType } from "./option-type";

type Elements = Record<string, HTMLElement>;

export type ApplicationState = {
  options: OptionType[];
  elements: Elements;
  lastIndex: number;
  animation: { duration: number };
  sound: boolean;
};
