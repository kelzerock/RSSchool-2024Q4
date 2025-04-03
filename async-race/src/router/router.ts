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
  404: create404page,
  '/': createMainPage,
  '/winners': createWinnerPage,
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

function create404page(): void {
  document.body.innerHTML = '<h1>404 page</h1>';
}

function createMainPage(): void {
  console.log('main page');
  document.body.innerHTML = '<h1>Main page</h1>';
}

function createWinnerPage(): void {
  console.log('winners page');
  document.body.innerHTML = '<h1>Winners page</h1>';
}
