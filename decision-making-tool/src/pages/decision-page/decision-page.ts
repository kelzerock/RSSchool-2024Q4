import { DOMElements } from "../../enums/dom-elements";
import { PathRoute } from "../../enums/path";
import { routeTo } from "../../router/router";
import { appState } from "../../state/application-state";
import { simpleButton, wrapperStyles } from "../../styles/styles";
import { disabledElement } from "../../utils/disabled-element";
import { isReadyToMakeDecision } from "../../utils/is-ready-to-make-decision";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";
import { unDisabledElement } from "../../utils/undisabled-element";
import { drawCircle } from "./draw-circle";
import { handleInput } from "./handle-input";
import { handleClickSoundButton, playingWinSound } from "./sound-button";

const createMainElements = (parent: HTMLElement): HTMLElement[] => {
  createNode({
    tag: "h1",
    className: "text-3xl font-bold text-emerald-900",
    parent: parent,
    text: "Decision making tool",
  });

  const buttonsBlock = createNode({
    tag: "div",
    className: "flex flex-row items-center",
    parent: parent,
  });

  const buttonPlay = createNode({
    tag: "button",
    className: simpleButton,
    parent: parent,
    text: "start",
  });

  const informationDisplay = createNode({
    tag: "div",
    className:
      "w-[300px] border-2 text-center border-teal-800 rounded-sm bg-teal-600 select-none",
    parent: parent,
    text: "for start - push the play button",
  });

  const canvasWrapper = createNode({
    tag: "div",
    parent: parent,
    className: "",
  });

  const canvasBlock = createNode({
    tag: "canvas",
    parent: canvasWrapper,
    className: "border-2 border-black",
  });

  return [buttonsBlock, buttonPlay, informationDisplay, canvasBlock];
};

const createButtons = (
  parent: HTMLElement,
): [HTMLElement, HTMLElement, HTMLInputElement] => {
  const buttonBack = createNode({
    tag: "button",
    className: simpleButton,
    parent: parent,
    text: "return back",
  });

  const buttonSound = createNode({
    tag: "button",
    className: simpleButton,
    parent: parent,
    text: appState.sound ? "sound: on" : "sound: off",
    attributes: [{ name: "data-sound", value: `${appState.sound}` }],
  });

  createNode({
    tag: "label",
    className:
      "bg-teal-700 border-2 border-teal-800 h-[35px] px-4 text-teal-200 hover:bg-teal-800 hover:cursor-pointer hover:border-teal-700 -mx-[2px] flex items-center justify-center rounded-l-sm rounded-r-none",
    parent: parent,
    text: "time",
    attributes: [{ name: "for", value: "timer" }],
  });

  const inputTimer = createNode({
    tag: "input",
    className:
      "bg-teal-300 rounded-r-sm rounded-l-none  border-2 border-teal-800 h-[35px] w-[80px] px-4 text-teal-200 hover:bg-teal-400 hover:cursor-pointer outline-none text-teal-900 text-right disabled:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed",
    parent: parent,
    attributes: [
      { name: "value", value: (appState.animation.duration / 1000).toString() },
      { name: "type", value: "number" },
      { name: "min", value: "3" },
      { name: "id", value: "timer" },
    ],
  });

  return [buttonBack, buttonSound, inputTimer];
};

const handleButtonPlay = (
  inputTimer: HTMLInputElement,
  buttons: HTMLElement[],
): void => {
  if (Number.parseFloat(inputTimer.value) < 5 || !inputTimer.value) {
    return;
  }
  buttons.forEach(disabledElement);
};

export const createDecisionPage = (): void => {
  if (!isReadyToMakeDecision(appState)) {
    return routeTo(PathRoute.home);
  }

  removeAllChildren(document.body);

  const wrapper = createNode({
    tag: "div",
    className: wrapperStyles,
    parent: document.body,
  });

  const [buttonsBlock, buttonPlay, informationDisplay, canvasBlock] =
    createMainElements(wrapper);
  const [buttonBack, buttonSound, inputTimer] = createButtons(buttonsBlock);
  const buttonsForHandle = [buttonBack, buttonSound, inputTimer, buttonPlay];
  appState.elements[DOMElements.buttonPlay] = buttonPlay;

  inputTimer.addEventListener("input", () => handleInput(inputTimer, appState));

  buttonBack.addEventListener("click", () => routeTo(PathRoute.home));

  buttonSound.addEventListener("click", () =>
    handleClickSoundButton(buttonSound),
  );

  buttonPlay.addEventListener("click", () =>
    handleButtonPlay(inputTimer, buttonsForHandle),
  );

  const activateButtons = (): void => {
    buttonsForHandle.forEach(unDisabledElement);
    informationDisplay.classList.add("bg-lime-500");
    informationDisplay.classList.remove("bg-teal-600");
    playingWinSound(buttonSound);
  };

  drawCircle(canvasBlock, activateButtons, informationDisplay, inputTimer);
};
