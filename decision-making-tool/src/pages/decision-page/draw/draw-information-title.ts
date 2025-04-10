import type { DrawInformationTitle } from "../../../types/draw-information-title";

export const drawInformationTitle = (data: DrawInformationTitle): void => {
  const {
    context,
    proportion,
    description,
    angle,
    endAngle,
    centerX,
    centerY,
    radius,
  } = data;

  let text = description;
  if (proportion < 0.03) {
    text = "";
  } else if (description.length > 7) {
    text = description.slice(0, 7);
  }

  const textAngle = angle + (endAngle - angle) / 2;
  const textX =
    centerX + (radius / 1.5) * Math.cos(angle + (endAngle - angle) / 2);
  const textY =
    centerY + (radius / 1.5) * Math.sin(angle + (endAngle - angle) / 2);

  context.save();
  context.translate(textX, textY);
  context.rotate(textAngle);

  context.font = "bold 16px sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";

  context.fillStyle = "#ffffff";
  context.fillText(text, 0, 0);

  context.strokeStyle = "#0000000";
  context.lineWidth = 1;
  context.strokeText(text, 0, 0);
  context.restore();
};
