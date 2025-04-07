export const getRandomNumber = (max: number): number => {
  const start = 0;
  const offset = 1;
  const min = start;
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - min + offset)) + min;
};
