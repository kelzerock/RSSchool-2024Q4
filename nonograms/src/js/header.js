import { Component } from "./node";
import "../assets/style/header.scss";
import { changeThemeButton } from "./buttons";

const header = new Component(
  {
    tag: "header",
    className: "header",
    text: "Nonograms",
  },
  changeThemeButton
);

export { header };
