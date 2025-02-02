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

class CreateSelectTag {
  constructor(options, attribute, labelText = "Select size") {
    this.options = options;
    this.attribute = attribute;
    this.labelText = labelText;
  }

  create() {
    const divSelect = createComponent({
      tag: "div",
      className: "select-place",
    });
    const fieldset = createComponent({
      tag: "fieldset",
      className: "fieldset",
    });
    const labelForSelect = createComponent({
      tag: "label",
      className: "label label-select",
      text: this.labelText,
      attributes: { for: this.attribute },
    });

    const select = createComponent({
      tag: "select",
      className: "select",
      attributes: { id: this.attribute },
    });

    this.options.forEach((el) => {
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
}

const divSelectLevel = new CreateSelectTag(
  Object.values(playerMap).map((el) => el.name),
  "level"
).create();
const divSelectMapName = new CreateSelectTag(
  Object.keys(playerMap.easy.maps),
  "mapName"
).create();

const levelSelector = divSelectLevel.getNode().querySelector("select");
const mapsSelector = divSelectMapName.getNode().querySelector("select");
levelSelector.addEventListener("change", (e) => {
  while (mapsSelector.firstChild) {
    mapsSelector.removeChild(mapsSelector.firstChild);
  }
  Object.keys(playerMap[e.target.value].maps)
    .map((el) => {
      const option = createComponent({
        tag: "option",
        className: "option",
        text: el,
        attributes: { value: el },
      });
      return option.getNode();
    })
    .forEach((el) => mapsSelector.appendChild(el));
});

export { divSelectLevel, divSelectMapName };
