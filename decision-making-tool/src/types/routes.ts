export type RouteFunction = (event: Event) => void;

export type RoutesMap = Record<string, () => void>;