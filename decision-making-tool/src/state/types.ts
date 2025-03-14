type optionType = {
  index: string;
  description: string;
  weight: number;
};

type ApplicationState = {
  options: optionType[];
  lastIndex: number;
};

export { ApplicationState };
