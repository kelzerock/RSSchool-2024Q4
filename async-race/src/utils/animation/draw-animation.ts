export type Draw = (progress: number, element: HTMLElement) => void;

export const drawAnimate: Draw = (progress, element) => {
  element.style.left = progress + 'px';
};
