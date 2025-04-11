export const transformedArrayWithAccumulateSum = (
  array: number[],
): number[] => {
  let sum = 0;
  const newArray: number[] = [0];
  [...array].reverse().forEach((value) => {
    sum += value;
    newArray.push(sum);
  });
  return newArray.reverse();
};
