import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";

export const drawCircle = (element: HTMLElement): void => {
  if (element instanceof HTMLCanvasElement) {
    const widthElement = 200;
    const heightElement = 200;
    element.width = widthElement;
    element.height = heightElement;

    const context = element.getContext("2d");
    const radius = 70;

    if (context) {
      const centerX = element.width / 2;
      const centerY = element.height / 2;

      const proportions = [0.3, 0.2, 0.5];
      const colors = ["red", "green", "blue"];

      const draw = (startAngle: number): void => {
        let angle = startAngle;

        proportions.forEach((proportion, index) => {
          const endAngle = angle + Math.PI * 2 * proportion;

          if (context) {
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.arc(centerX, centerY, radius, angle, endAngle);
            context.closePath();
            context.fillStyle = colors[index];
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
            context.lineWidth = 2;
            context.stroke();
          }

          angle = endAngle;
        });
      };
      draw(0);

      const quad = (timeFraction: number): number => {
        return Math.pow(timeFraction, 2);
      };

      appState.elements[DOMElements.buttonPlay].addEventListener(
        "click",
        () => {
          animate({
            timing: quad,
            draw,
            duration: 7000,
            ctx: context,
            width: widthElement,
            height: heightElement,
          });
        },
      );
    }
  }
};

function animate({
  timing,
  draw,
  duration,
  ctx,
  width,
  height,
}: {
  timing: (t: number) => number;
  draw: (angle: number) => void;
  duration: number;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
}): void {
  const start = performance.now();
  const fullRotations = Math.floor(Math.random() * 5 + 1);
  const extraAngle = Math.random() * Math.PI * 2;
  const finalAngle = Math.PI * 2 * fullRotations + extraAngle;

  function render(time: number): void {
    const timeFraction = Math.min((time - start) / duration, 1);
    const progress = timing(timeFraction);

    const rotationAngle = finalAngle * progress;
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
    }
    draw(rotationAngle);

    if (timeFraction < 1) {
      requestAnimationFrame(render);
    }
  }

  requestAnimationFrame(render);
}
