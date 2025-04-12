import { type Configuration } from 'webpack';
import path from 'node:path';
import { bundleDevelopmentServer } from './bundle-devserver';
import { bundlePlugins } from './bundle-plugins';
import { bundleResolves } from './bundle-resolves';
import { bundleLoaders } from './bundle-loaders';
import { bundleOutput } from './bundle-output';
import { type OptionsWebpack } from '../src/types/options-webpack';

export const bundleConfig = (options: OptionsWebpack): Configuration => {
  const isDevelopment = options.mode === 'dev' ? true : false;

  const config: Configuration = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'inline-source-map',
    entry: path.resolve(options.path.entry, 'index.ts'),
    output: bundleOutput(options),
    devServer: bundleDevelopmentServer(options),
    plugins: bundlePlugins(options),
    module: bundleLoaders(),
    resolve: bundleResolves(),
  };

  return config;
};
