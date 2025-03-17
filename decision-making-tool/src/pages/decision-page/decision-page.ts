import { DOMElements } from "../../enums/dom-elements";
import { handleLocation } from "../../router/router";
import { appState } from "../../state/application-state";
import { simpleButton, wrapperStyles } from "../../styles/styles";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";
import { drawCircle } from "./draw-circle";

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
    className: "",
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
  const labelTimer = createNode({
    tag: "label",
    className: simpleButton,
    parent: buttonsBlock,
    text: "time",
  });
  const inputTimer = createNode({
    tag: "input",
    className: "",
    parent: buttonsBlock,
    attributes: [
      { name: "value", value: "10" },
      { name: "type", value: "number" },
    ],
  });
  const buttonPlay = createNode({
    tag: "button",
    className: simpleButton,
    parent: wrapper,
    text: "start",
  });
  appState.elements[DOMElements.buttonPlay] = buttonPlay;

  const informationDisplay = createNode({
    tag: "div",
    className: "",
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

  buttonSound.addEventListener("click", () => {
    console.log({ appState });
    console.log(localStorage.getItem("appState"));
  });

  drawCircle(canvasBlock);
  console.log(
    buttonsBlock,
    buttonSound,
    labelTimer,
    inputTimer,
    informationDisplay,
    canvasBlock,
  );
};
