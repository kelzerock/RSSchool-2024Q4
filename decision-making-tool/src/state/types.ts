type optionType = {
  index: number;
  description: string;
  weight: string;
};

type ApplicationState = {
  options: optionType[];
  lastIndex: number;
};

export { ApplicationState, optionType };
