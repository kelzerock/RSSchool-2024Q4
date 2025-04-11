import {
  FULL_CIRCLE,
  FULL_ROTATE_CIRCLE,
  MS_IN_MINUTE,
} from "../constants/constants";

export const createFinalRandomAngle = (duration: number): number => {
  const fullRotations = Math.floor(
    Math.random() * FULL_ROTATE_CIRCLE + duration / MS_IN_MINUTE,
  );
  const extraAngle =
    Math.random() * FULL_CIRCLE + Math.random() * (duration / MS_IN_MINUTE);
  return FULL_CIRCLE * fullRotations + extraAngle;
};
