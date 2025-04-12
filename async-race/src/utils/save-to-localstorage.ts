export const saveToLocalstorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
