import { type CorrectStateType } from "./shape-state-type";

export type DataForDraw = {
  startAngle: number;
  prepareData: CorrectStateType[];
  isAnimationStart: { isStart: boolean };
  display: HTMLElement;
  context: CanvasRenderingContext2D;
  centerX: number;
  centerY: number;
  radius: number;
  widthElement: number;
};
