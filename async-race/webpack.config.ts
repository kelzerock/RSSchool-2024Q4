import path from 'node:path';
import { type Configuration } from 'webpack';
import { bundleConfig } from './webpack-config/bundle-config';
import type { mode } from './src/types/mode';
import type { optionsWebpack } from './src/types/options-webpack';

type Environment = {
  mode: mode;
};

const webpackConfig = (environment: Environment): Configuration => {
  const options: optionsWebpack = {
    path: {
      entry: path.resolve(__dirname, 'src'),
      build: path.resolve(__dirname, 'build'),
      template: path.resolve(__dirname, 'template'),
      favicon: path.resolve(__dirname, 'src', 'assets', 'favicon'),
    },
    mode: environment.mode,
    port: 5000,
  };

  return bundleConfig(options);
};

export default webpackConfig;
