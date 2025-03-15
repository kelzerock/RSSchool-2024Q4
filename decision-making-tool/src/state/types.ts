type optionType = {
  index: number;
  description: string;
  weight: string;
};

type elements = Record<string, HTMLElement>;

type ApplicationState = {
  options: optionType[];
  elements: elements;
  lastIndex: number;
};

export { ApplicationState, optionType };
