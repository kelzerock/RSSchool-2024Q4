import type { Mode } from './mode';

export type OptionsWebpack = {
  path: {
    entry: string;
    build: string;
    template: string;
    favicon: string;
  };
  mode: Mode;
  port: number;
};
