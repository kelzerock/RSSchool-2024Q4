import { create404page } from "../pages/404-page/404-page";
import { createDecisionPage } from "../pages/decision-page/decision-page";
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
  404: create404page,
  "/": createMainPage,
  "/decision": createDecisionPage,
};

const handleLocation = (): void => {
  const path = globalThis.location.pathname;
  const route = routes[path] || routes[404];

  route();
};

export { route, handleLocation };
