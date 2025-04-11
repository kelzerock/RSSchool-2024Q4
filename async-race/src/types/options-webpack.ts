import type { mode } from './mode';

export type optionsWebpack = {
  path: {
    entry: string;
    build: string;
    template: string;
    favicon: string;
  };
  mode: mode;
  port: number;
};
