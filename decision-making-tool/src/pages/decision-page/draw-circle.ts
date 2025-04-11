import { DOMElements } from "../../enums/dom-elements";
import { appState } from "../../state/application-state";
import { modalWithMessage } from "../main-page/modal-with-message/modal-with.message";
import { drawInformationTitle } from "./draw/draw-information-title";
import { drawInnerCircle } from "./draw/draw-inner-circle";
import { drawSector } from "./draw/draw-sector";
import { drawTriangle } from "./draw/draw-triangle";
import { inOutQuad } from "../../utils/timing-functions";
import { getInfoOfOptionsWithProportion } from "./get-info-of-options-with-proportion";
import { transformedArrayWithAccumulateSum } from "../../utils/transformed-array-with-accumulate-sum";
import { calculateOffsetAngle } from "../../utils/calculate-offset-angle";
import { calculateItemAngle } from "../../utils/calculate-item-angle";
import { type DataForDraw } from "../../types/data-for-draw";
import {
  type InputDataForButtonPlay,
  type InputDataForAnimation,
} from "../../types/input-data-for-animation";
import { type CorrectStateType } from "../../types/shape-state-type";
import { createFinalRandomAngle } from "../../utils/create-final-random-angle";
import {
  RADIUS,
  RATIO_CANVAS,
  SIZE_CANVAS,
  START_ANGLE,
} from "../../constants/constants";

const findIndex = (number_: number, array: number[]): number => {
  let count = 1;
  while (count < array.length) {
    if (number_ <= array[count - 1] && number_ > array[count]) return count - 1;
    count += 1;
  }
  return array.length;
};

const handleClickPlayButton = (data: InputDataForButtonPlay): void => {
  const { input, isAnimationStart } = data;
  if (Number.parseFloat(input.value) < 5 || !input.value) {
    let dataForModal: null | string = null;
    if (input.value) dataForModal = "null";

    return modalWithMessage(
      `Duration must me over than 5 seconds (inclusive). Your value is ${dataForModal}!`,
    );
  }

  isAnimationStart.isStart = true;

  animate({
    timing: inOutQuad,
    duration: appState.animation.duration,
    ...data,
  });
};

const changeDisplayInfo = (
  display: HTMLElement,
  prepareData: CorrectStateType[],
  offsetAngle: number,
  transformArray: number[],
): void => {
  display.textContent =
    prepareData[findIndex(offsetAngle, transformArray)].description;
  display.classList.remove("bg-lime-500");
  display.classList.add("bg-teal-600");
};

const draw = (data: DataForDraw): void => {
  const {
    startAngle,
    prepareData,
    isAnimationStart,
    display,
    context,
    centerX,
    centerY,
    radius,
    widthElement,
  } = data;

  let angle = startAngle;

  const offsetAngle = calculateOffsetAngle(angle);
  const array = prepareData.map(calculateItemAngle);
  const transformArray = transformedArrayWithAccumulateSum(array);

  if (isAnimationStart.isStart)
    changeDisplayInfo(display, prepareData, offsetAngle, transformArray);

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

      drawInformationTitle({
        ...data,
        proportion: option.proportion,
        description: option.description,
        angle,
        endAngle,
      });
    }

    drawTriangle(context, widthElement, centerX, centerY, radius);
    drawInnerCircle(context, centerX, centerY, 30);
    angle = endAngle;
  });
};

const addEventListenerToButtonPlay = (
  element: HTMLElement,
  data: InputDataForButtonPlay,
): void => {
  element.addEventListener("click", () => handleClickPlayButton(data));
};

const getSizeMainShape = (
  size: number,
  radius: number,
): {
  widthElement: number;
  heightElement: number;
  centerX: number;
  centerY: number;
  radius: number;
} => {
  const widthElement = size;
  const heightElement = size;
  const centerX = size / RATIO_CANVAS;
  const centerY = size / RATIO_CANVAS;
  return { widthElement, heightElement, centerX, centerY, radius };
};

export const drawCircle = (
  element: HTMLCanvasElement,
  callback: () => void,
  display: HTMLElement,
  input: HTMLInputElement,
): void => {
  const data = getSizeMainShape(SIZE_CANVAS, RADIUS);

  element.width = data.widthElement;
  element.height = data.heightElement;
  const isAnimationStart = { isStart: false };

  const context = element.getContext("2d");

  if (context) {
    const prepareData = getInfoOfOptionsWithProportion(appState);

    const storageAngle = localStorage.getItem("angle");
    let startAngle = START_ANGLE;
    if (storageAngle) {
      startAngle = Number.parseFloat(storageAngle);
    }

    const config = {
      element,
      ...data,
      display,
      prepareData,
      isAnimationStart,
      context,
    };

    draw({
      startAngle,
      ...config,
    });

    addEventListenerToButtonPlay(appState.elements[DOMElements.buttonPlay], {
      ...config,
      draw,
      input,
      callback,
    });
  }
};

function animate(data: InputDataForAnimation): void {
  const { duration, timing, context, widthElement, heightElement, callback } =
    data;
  const start = performance.now();

  const finalAngle = createFinalRandomAngle(duration);

  const storageAngle = localStorage.getItem("angle");
  let startAngle = 0;
  if (storageAngle) {
    startAngle = Number.parseFloat(storageAngle);
  }

  function render(time: number): void {
    const timeFraction = Math.min((time - start) / duration, 1);
    const progress = timing(timeFraction);
    const rotationAngle = finalAngle * progress + startAngle;

    if (context) {
      context.clearRect(0, 0, widthElement, heightElement);
      draw({
        ...data,
        startAngle: rotationAngle,
      });
    }

    if (timeFraction < 1) {
      requestAnimationFrame(render);
    } else {
      localStorage.setItem("angle", rotationAngle.toString());
      callback();
    }
  }

  requestAnimationFrame(render);
}
