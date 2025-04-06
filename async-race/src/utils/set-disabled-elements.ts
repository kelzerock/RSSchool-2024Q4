export const setDisabledElements = (
  array: HTMLElement[],
  value: boolean
): void => {
  if (value) {
    array.forEach((item) => item.setAttribute('disabled', ``));
  } else {
    array.forEach((item) => item.removeAttribute('disabled'));
  }
};
