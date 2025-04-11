import { LINE_WEIGHT, STROKE_COLOR_SECTOR } from "../../../constants/constants";

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
  context.strokeStyle = STROKE_COLOR_SECTOR;
  context.lineWidth = LINE_WEIGHT;
  context.stroke();
};
