export type DataToCreateElement<T extends keyof HTMLElementTagNameMap> = {
  tagName: T;
  className?: string;
  parent?: HTMLElement;
  text?: string;
  attributes?: { attr: string; value: string }[];
};
