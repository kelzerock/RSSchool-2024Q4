type optionType = {
  index: number;
  description: string;
  weight: number;
};

type ApplicationState = {
  options: optionType[];
  lastIndex: number;
};

export { ApplicationState };
