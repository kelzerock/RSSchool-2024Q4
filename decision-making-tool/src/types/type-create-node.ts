export type TypeCreateNode<T extends keyof HTMLElementTagNameMap> = {
  tag: T;
  className?: string;
  parent?: HTMLElement | DocumentFragment;
  text?: string;
  attributes?: Attributes[];
};

type Attributes = {
  name: string;
  value: string;
};
