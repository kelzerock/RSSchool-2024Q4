import { type CorrectStateType } from "../types/shape-state-type";

export const calculateItemAngle = (element: CorrectStateType): number =>
  element.proportion * Math.PI * 2;
