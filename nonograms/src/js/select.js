import { playerMap } from "../constants/map/playerMap";
import { Component } from "./node";
import "../assets/style/select.scss";

function createComponent({ tag, className, text, attributes = {} }) {
  const element = new Component({ tag, className, text });
  Object.entries(attributes).forEach(([key, value]) => {
    element.getNode().setAttribute(key, value);
  });
  return element;
}

function createSelectTag(options, attribute, labelText = "Select size") {
  const divSelect = createComponent({ tag: "div", className: "select-place" });
  const fieldset = createComponent({ tag: "fieldset", className: "fieldset" });
  const labelForSelect = createComponent({
    tag: "label",
    className: "label label-select",
    text: labelText,
    attributes: { for: attribute },
  });

  const select = createComponent({
    tag: "select",
    className: "select",
    attributes: { id: attribute },
  });

  options.forEach((el) => {
    const option = createComponent({
      tag: "option",
      className: "option",
      text: el,
      attributes: { value: el },
    });
    select.getNode().appendChild(option.getNode());
  });

  fieldset.appendChildren([labelForSelect, select]);
  divSelect.appendChildren([fieldset]);
  return divSelect;
}

const divSelectLevel = createSelectTag(
  Object.values(playerMap).map((el) => el.name),
  "level"
);
const divSelectMapName = createSelectTag(
  Object.values(playerMap.easy.maps).map((el) => el.name),
  "mapName"
);
export { divSelectLevel, divSelectMapName };
