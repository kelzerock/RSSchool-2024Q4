export const drawInnerCircle = (
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
): void => {
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  context.fillStyle = "#009689";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = "#0b4f4a";
  context.stroke();
};
