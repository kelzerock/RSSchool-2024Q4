import { Component } from "./node";
import "../assets/style/footer.scss";

const link = new Component({
  tag: "a",
  className: "footer-link",
  text: "Created by Zhuchkov Aleksei, 2025",
  attributes: { href: "https://github.com/zhuchkov" },
});

link.getNode().setAttribute("target", "_blank");
link.getNode().setAttribute("href", "https://github.com/zhuchkov");

const footer = new Component(
  {
    tag: "footer",
    className: "footer",
    text: "",
  },
  link
);

export { footer };
