export type RouteFunction = (event: Event) => void;

const route = (event: Event): void => {
  event = event || window.event;
  event.preventDefault();
  const { target } = event;
  if (target instanceof HTMLAnchorElement) {
    globalThis.history.pushState({}, "", target.href);
  }
  handleLocation();
};

const routes: Record<string, string> = {
  404: "<h1>/pages/404.html</h1>",
  "/": "<h1>/pages/index.html</h1>",
  "/decision": "<h1>/pages/decision.html</h1>",
};

const handleLocation = (): void => {
  const path = globalThis.location.pathname;
  const route = routes[path] || routes[404];
  // const html = routes;
  document.body.innerHTML = route;
};

export { route, handleLocation };
