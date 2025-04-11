import type { Success } from '../types/success';

export const isSuccess = (element: unknown): element is Success => {
  return element &&
    typeof element === 'object' &&
    'success' in element &&
    element.success
    ? true
    : false;
};
