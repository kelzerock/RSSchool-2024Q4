import { type Configuration } from 'webpack';
import path from 'node:path';
import { type optionsWebpack } from './types/types';
import { bundleDevelopmentServer } from './bundle-devserver';
import { bundlePlugins } from './bundle-plugins';
import { bundleResolves } from './bundle-resolves';
import { bundleLoaders } from './bundle-loaders';
import { bundleOutput } from './bundle-output';

export const bundleConfig = (options: optionsWebpack): Configuration => {
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
