export const loadFromLocalstorage = (key: string): unknown | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
