import { simpleButton, wrapperStyles } from "../../styles/styles";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";

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
  const buttonPlay = createNode({
    tag: "button",
    className: simpleButton,
    parent: wrapper,
    text: "start",
  });
  const informationDisplay = createNode({
    tag: "div",
    className: "",
    parent: wrapper,
    text: "for start - push the play button",
  });
  const canvasBlock = createNode({
    tag: "div",
    parent: wrapper,
    className: "",
  });
  console.log(buttonsBlock, buttonPlay, informationDisplay, canvasBlock);
};
