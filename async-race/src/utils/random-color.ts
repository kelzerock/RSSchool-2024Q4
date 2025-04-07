export const randomHexColor = (): string => {
  const maximumLength = 6;

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < maximumLength; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};
