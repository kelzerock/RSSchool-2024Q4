export const handleName = (name: string): string => {
  const MAX_LENGTH = 15;
  const START_NAME = 0;
  const DOTTED = '...';
  return name.length > MAX_LENGTH
    ? name.slice(START_NAME, MAX_LENGTH) + DOTTED
    : name;
};
