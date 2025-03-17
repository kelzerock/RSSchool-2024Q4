export const drawTriangle = (
  context: CanvasRenderingContext2D,
  widthElement: number,
  centerX: number,
  centerY: number,
  radius: number,
): void => {
  const widthTriangle = widthElement / 10;
  context.beginPath();
  context.moveTo(centerX - widthTriangle / 2, centerY - radius);
  context.lineTo(centerX, centerY - radius + widthTriangle);
  context.lineTo(centerX + widthTriangle / 2, centerY - radius);
  context.fillStyle = "#009689";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = "#0b4f4a";
  context.stroke();
};
