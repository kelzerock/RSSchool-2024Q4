export const randomNumber = (max: number, min = 1): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
