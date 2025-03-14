import { createMainPage } from "../pages/main-page/main-page";

export type RouteFunction = (event: Event) => void;
type Map = Record<string, () => void>;

const route = (event: Event): void => {
  event = event || window.event;
  event.preventDefault();
  const { target } = event;
  if (target instanceof HTMLAnchorElement) {
    globalThis.history.pushState({}, "", target.href);
  }
  handleLocation();
};

const routes: Map = {
  404: createMainPage,
  "/": createMainPage,
  "/decision": createMainPage,
};

const handleLocation = (): void => {
  const path = globalThis.location.pathname;
  const route = routes[path] || routes[404];
  if (typeof route === "function") {
    route();
  } else {
    document.body.innerHTML = route;
  }
};

export { route, handleLocation };
