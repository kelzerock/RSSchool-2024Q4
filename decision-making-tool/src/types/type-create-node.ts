export type TypeCreateNode = {
  tag: keyof HTMLElementTagNameMap;
  className?: string;
  parent?: HTMLElement | DocumentFragment;
  text?: string;
  attributes?: Attributes[];
};

type Attributes = {
  name: string;
  value: string;
};