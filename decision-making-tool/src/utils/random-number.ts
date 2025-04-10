export const randomNumber = (max: number, min = 1): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
