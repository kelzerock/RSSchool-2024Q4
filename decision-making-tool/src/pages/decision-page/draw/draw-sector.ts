export const drawSector = (
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  angle: number,
  endAngle: number,
  color: string,
): void => {
  context.beginPath();
  context.moveTo(centerX, centerY);
  context.arc(centerX, centerY, radius, angle, endAngle);
  context.closePath();
  context.fillStyle = color;
  context.fill();

  context.beginPath();
  context.moveTo(centerX, centerY);
  context.lineTo(
    centerX + radius * Math.cos(angle),
    centerY + radius * Math.sin(angle),
  );
  context.moveTo(centerX, centerY);
  context.lineTo(
    centerX + radius * Math.cos(endAngle),
    centerY + radius * Math.sin(endAngle),
  );
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.stroke();
};
