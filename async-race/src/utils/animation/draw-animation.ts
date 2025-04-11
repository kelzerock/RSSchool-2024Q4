import type { Draw } from '../../types/draw';

export const draw: Draw = (progress, element) => {
  element.style.left = progress + '%';
};
