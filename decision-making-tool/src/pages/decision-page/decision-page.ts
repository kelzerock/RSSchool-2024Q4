import { DOMElements } from "../../enums/dom-elements";
import { handleLocation } from "../../router/router";
import { appState } from "../../state/application-state";
import { simpleButton, wrapperStyles } from "../../styles/styles";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";
import { drawCircle } from "./draw-circle";
import { handleInput } from "./handle-input";

export const createDecisionPage = (): void => {
  removeAllChildren(document.body);
  const wrapper = createNode({
    tag: "div",
    className: wrapperStyles,
    parent: document.body,
  });

  createNode({
    tag: "h1",
    className: "text-3xl font-bold text-emerald-900",
    parent: wrapper,
    text: "Decision making tool",
  });

  const buttonsBlock = createNode({
    tag: "div",
    className: "flex flex-row items-center",
    parent: wrapper,
  });

  const buttonBack = createNode({
    tag: "button",
    className: simpleButton,
    parent: buttonsBlock,
    text: "return back",
  });
  buttonBack.addEventListener("click", () => {
    globalThis.history.pushState({}, "", "/");
    handleLocation();
  });
  const buttonSound = createNode({
    tag: "button",
    className: simpleButton,
    parent: buttonsBlock,
    text: "sound: off",
  });
  createNode({
    tag: "label",
    className:
      "bg-teal-700 border-2 border-teal-800 h-[35px] px-4 text-teal-200 hover:bg-teal-800 hover:cursor-pointer hover:border-teal-700 -mx-[2px] flex items-center justify-center rounded-l-sm rounded-r-none",
    parent: buttonsBlock,
    text: "time",
    attributes: [{ name: "for", value: "timer" }],
  });
  const inputTimer = createNode({
    tag: "input",
    className:
      "bg-teal-300 rounded-r-sm rounded-l-none  border-2 border-teal-800 h-[35px] w-[80px] px-4 text-teal-200 hover:bg-teal-400 hover:cursor-pointer outline-none text-teal-900 text-right disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed",
    parent: buttonsBlock,
    attributes: [
      { name: "value", value: (appState.animation.duration / 1000).toString() },
      { name: "type", value: "number" },
      { name: "min", value: "3" },
      { name: "id", value: "timer" },
    ],
  });
  inputTimer.addEventListener("input", () => {
    if (inputTimer instanceof HTMLInputElement) {
      handleInput(inputTimer, appState);
    }
  });
  const buttonPlay = createNode({
    tag: "button",
    className: simpleButton,
    parent: wrapper,
    text: "start",
  });

  buttonPlay.addEventListener("click", () => {
    [buttonBack, buttonSound, inputTimer, buttonPlay].forEach((element) => {
      element.setAttribute("disabled", "true");
    });
  });
  appState.elements[DOMElements.buttonPlay] = buttonPlay;

  const informationDisplay = createNode({
    tag: "div",
    className:
      "w-[300px] border-2 text-center border-teal-800 rounded-sm bg-teal-600 select-none",
    parent: wrapper,
    text: "for start - push the play button",
  });
  const canvasWrapper = createNode({
    tag: "div",
    parent: wrapper,
    className: "",
  });
  const canvasBlock = createNode({
    tag: "canvas",
    parent: canvasWrapper,
    className: "border-2 border-black",
  });

  const activateButtons = (): void => {
    [buttonBack, buttonSound, inputTimer, buttonPlay].forEach((element) => {
      element.removeAttribute("disabled");
    });
    informationDisplay.classList.add("bg-lime-500");
    informationDisplay.classList.remove("bg-teal-600");
  };

  drawCircle(canvasBlock, activateButtons, informationDisplay);
};
