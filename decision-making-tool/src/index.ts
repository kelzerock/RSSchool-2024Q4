import { handleLocation, route } from "./router/router";
import "./style.css";

// const a = "test!";
// console.log(a);
// const test = document.createElement("div");
// test.textContent = "test test test";
// test.className = "text-xs w-6xl";

// document.body.appendChild(test);

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
