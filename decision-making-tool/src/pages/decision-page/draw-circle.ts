import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";
import { getInfoOfOptionsWithProportion } from "./get-info-of-options-with-proportion";

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
      const prepareData = getInfoOfOptionsWithProportion(appState);
      console.log({ prepareData });

      // const proportions = [0.3, 0.2, 0.5];
      // const colors = ["red", "green", "blue"];

      const storageAngle = localStorage.getItem("angle");
      let startAngle = 0;
      if (storageAngle) {
        startAngle = Number.parseFloat(storageAngle);
      }
      const draw = (startAngle: number): void => {
        let angle = startAngle;

        prepareData.forEach((option) => {
          const endAngle = angle + Math.PI * 2 * option.proportion;

          if (context) {
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.arc(centerX, centerY, radius, angle, endAngle);
            context.closePath();
            context.fillStyle = option.color;
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
          }

          angle = endAngle;
        });
      };
      draw(startAngle);

      const quad = (timeFraction: number): number => {
        return Math.pow(timeFraction, 2);
      };

      appState.elements[DOMElements.buttonPlay].addEventListener(
        "click",
        () => {
          animate({
            timing: quad,
            draw,
            duration: appState.animation.duration,
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

  const storageAngle = localStorage.getItem("angle");
  let startAngle = 0;
  if (storageAngle) {
    startAngle = Number.parseFloat(storageAngle);
  }

  function render(time: number): void {
    const timeFraction = Math.min((time - start) / duration, 1);
    const progress = timing(timeFraction);

    const rotationAngle = finalAngle * progress + startAngle;
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
    }
    draw(rotationAngle);

    if (timeFraction < 1) {
      requestAnimationFrame(render);
    } else {
      localStorage.setItem("angle", rotationAngle.toString());
    }
  }

  requestAnimationFrame(render);
}
