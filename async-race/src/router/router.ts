import { mainPage } from '../pages/main/main-page';
import { page404 } from '../pages/page404/page404';
import { winnersPage } from '../pages/winners/winners-page';

// export type RouteFunction = (event: Event) => void;
export enum PathRoute {
  home = '/',
  winners = '/winners',
}
type Map = Record<string, () => void>;

export const route = (event: Event): void => {
  event = event || window.event;
  event.preventDefault();
  const { target } = event;
  if (target instanceof HTMLAnchorElement) {
    globalThis.history.pushState({}, '', target.href);
  }
  handleLocation();
};

const routes: Map = {
  404: page404,
  '/': mainPage,
  '/winners': winnersPage,
};

export const handleLocation = (): void => {
  const path = globalThis.location.pathname;
  const route = routes[path] || routes[404];

  route();
};

export const routeTo = (path: PathRoute): void => {
  globalThis.history.pushState({}, '', path);
  handleLocation();
};
