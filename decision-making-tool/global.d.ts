import { RouteFunc } from "./src/router/router";

export {};
declare global {
  interface Window {
    route: RouteFunc; // this will be your variable name
  }
}
