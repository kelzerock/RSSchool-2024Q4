import { type DataForDraw } from "./data-for-draw";
import { type CorrectStateType } from "./shape-state-type";

export type InputDataForButtonPlay = Omit<
  InputDataForAnimation,
  "timing" | "duration"
>;

export type InputDataForAnimation = {
  timing: (t: number) => number;
  duration: number;
  input: HTMLInputElement;
  isAnimationStart: { isStart: boolean };
  draw: (data: DataForDraw) => void;
  context: CanvasRenderingContext2D;
  widthElement: number;
  heightElement: number;
  callback: () => void;
  prepareData: CorrectStateType[];
  display: HTMLElement;
  centerX: number;
  centerY: number;
  radius: number;
};
