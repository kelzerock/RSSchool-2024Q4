import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";
import { modalWithMessage } from "../main-page/modal-with-message/modal-with.message";
import { drawInformationTitle } from "./draw/draw-information-title";
import { drawInnerCircle } from "./draw/draw-inner-circle";
import { drawSector } from "./draw/draw-sector";
import { drawTriangle } from "./draw/draw-triangle";
import { inOutQuad } from "./draw/timing-functions";
import { getInfoOfOptionsWithProportion } from "./get-info-of-options-with-proportion";

const transformed = (array: number[]): number[] => {
  let sum = 0;
  const newArray: number[] = [0];
  [...array].reverse().forEach((value) => {
    sum += value;
    newArray.push(sum);
  });
  return newArray.reverse();
};

const findIndex = (number_: number, array: number[]): number => {
  let count = 1;
  while (count < array.length) {
    if (number_ <= array[count - 1] && number_ > array[count]) return count - 1;
    count += 1;
  }
  return array.length;
};

export const drawCircle = (
  element: HTMLElement,
  callback: () => void,
  display: HTMLElement,
  input: HTMLElement,
): void => {
  if (element instanceof HTMLCanvasElement) {
    const widthElement = 500;
    const heightElement = 500;
    element.width = widthElement;
    element.height = heightElement;
    let isAnimationStart = false;

    const context = element.getContext("2d");
    const radius = 230;

    if (context) {
      const centerX = element.width / 2;
      const centerY = element.height / 2;
      const prepareData = getInfoOfOptionsWithProportion(appState);

      const storageAngle = localStorage.getItem("angle");
      let startAngle = 0;
      if (storageAngle) {
        startAngle = Number.parseFloat(storageAngle);
      }

      const draw = (startAngle: number): void => {
        let angle = startAngle;
        const offsetAngle =
          ((angle % (Math.PI * 2)) + Math.PI / 2) % (Math.PI * 2);
        const array = prepareData.map(
          (element_) => element_.proportion * Math.PI * 2,
        );
        const transformArray = transformed(array);

        if (isAnimationStart) {
          display.textContent =
            prepareData[findIndex(offsetAngle, transformArray)].description;
          display.classList.remove("bg-lime-500");
          display.classList.add("bg-teal-600");
        }

        prepareData.forEach((option) => {
          const endAngle = angle + Math.PI * 2 * option.proportion;

          if (context) {
            drawSector(
              context,
              centerX,
              centerY,
              radius,
              angle,
              endAngle,
              option.color,
            );

            drawInformationTitle(
              context,
              option.proportion,
              option.description,
              angle,
              endAngle,
              centerX,
              centerY,
              radius,
            );
          }

          drawTriangle(context, widthElement, centerX, centerY, radius);
          drawInnerCircle(context, centerX, centerY, 30);
          angle = endAngle;
        });
      };
      draw(startAngle);

      appState.elements[DOMElements.buttonPlay].addEventListener(
        "click",
        () => {
          if (
            input instanceof HTMLInputElement &&
            (Number.parseFloat(input.value) < 5 ||
              Number.parseFloat(input.value) > 30)
          ) {
            return modalWithMessage(
              `Duration must me over than 5 seconds and less than 30 seconds. Your value is ${input.value}!`,
            );
          }

          isAnimationStart = true;
          animate({
            timing: inOutQuad,
            draw,
            duration: appState.animation.duration,
            ctx: context,
            width: widthElement,
            height: heightElement,
            callback,
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
  callback,
}: {
  timing: (t: number) => number;
  draw: (angle: number) => void;
  duration: number;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  callback: () => void;
}): void {
  const start = performance.now();
  const fullRotations = Math.floor(Math.random() * 5 + 5);
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
      callback();
    }
  }

  requestAnimationFrame(render);
}
