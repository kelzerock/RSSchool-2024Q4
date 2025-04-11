export const calculateOffsetAngle = (angle: number): number =>
  ((angle % (Math.PI * 2)) + Math.PI / 2) % (Math.PI * 2);
