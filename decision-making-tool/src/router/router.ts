import type { PathRoute } from "../enums/path";
import { create404page } from "../pages/404-page/404-page";
import { createDecisionPage } from "../pages/decision-page/decision-page";
import { createMainPage } from "../pages/main-page/main-page";
import { RoutesMap } from "../types/routes";

export const route = (event: Event): void => {
  event = event || window.event;
  event.preventDefault();
  const { target } = event;
  if (target instanceof HTMLAnchorElement) {
    globalThis.history.pushState({}, "", target.href);
  }
  handleLocation();
};

const routes: RoutesMap = {
  404: create404page,
  "/": createMainPage,
  "/decision": createDecisionPage,
};

export const handleLocation = (): void => {
  const path = globalThis.location.pathname;
  const route = routes[path] || routes[404];

  route();
};

export const routeTo = (path: PathRoute): void => {
  globalThis.history.pushState({}, "", path);
  handleLocation();
};
