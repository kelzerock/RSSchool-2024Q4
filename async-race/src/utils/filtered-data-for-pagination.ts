export const filteredDataForPagination = <T>(
  max: number,
  page: number,
  array: T[]
): T[] => {
  const startNumber = 0;
  const minIndex = startNumber + max * page;
  const maxIndex = minIndex + max;
  return array.filter((_, index) => {
    if (index >= minIndex && index < maxIndex) return true;
    return false;
  });
};
