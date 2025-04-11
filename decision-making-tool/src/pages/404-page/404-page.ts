import { PathRoute } from "../../enums/path";
import { routeTo } from "../../router/router";
import { visuallyHidden } from "../../styles/styles";
import { createNode } from "../../utils/node";
import { removeAllChildren } from "../../utils/remove-all-children";

export const create404page = (): void => {
  removeAllChildren(document.body);

  const template = createNode({
    tag: "div",
    parent: document.body,
    className: "w-full h-full flex flex-col justify-center items-center",
  });

  createNode({
    tag: "h1",
    parent: template,
    className: visuallyHidden,
    text: "decision making tool",
  });

  createNode({
    tag: "h2",
    parent: template,
    text: "Sorry, this page doesn't exist. You will be redirected to the main page.",
    className: "text-3xl text-center",
  });

  const link = createNode({
    tag: "a",
    parent: template,
    text: "main page",
    className: "font-bold mt-4  text-xl underline uppercase text-emerald-900",
    attributes: [{ name: "href", value: PathRoute.home }],
  });

  const timeoutID = setTimeout(() => routeTo(PathRoute.home), 5000);

  link.addEventListener("click", (event) => {
    event.preventDefault();
    clearTimeout(timeoutID);
    routeTo(PathRoute.home);
  });
};
