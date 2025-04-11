import {
  BACKGROUND_COLOR_TRIANGLE,
  LINE_WIDTH_TRIANGLE,
  RATIO_FOR_TRIANGLE,
  RATIO_TO_MAIN_ELEMENT,
  STROKE_COLOR_TRIANGLE,
} from "../../../constants/constants";

export const drawTriangle = (
  context: CanvasRenderingContext2D,
  widthElement: number,
  centerX: number,
  centerY: number,
  radius: number,
): void => {
  const widthTriangle = widthElement / RATIO_TO_MAIN_ELEMENT;
  context.beginPath();
  context.moveTo(
    centerX - widthTriangle / RATIO_FOR_TRIANGLE,
    centerY - radius,
  );
  context.lineTo(centerX, centerY - radius + widthTriangle);
  context.lineTo(
    centerX + widthTriangle / RATIO_FOR_TRIANGLE,
    centerY - radius,
  );
  context.fillStyle = BACKGROUND_COLOR_TRIANGLE;
  context.fill();
  context.lineWidth = LINE_WIDTH_TRIANGLE;
  context.strokeStyle = STROKE_COLOR_TRIANGLE;
  context.stroke();
};
