import { handleLocation } from "./router/router";
import "./style.css";

globalThis.addEventListener("popstate", handleLocation);

handleLocation();
