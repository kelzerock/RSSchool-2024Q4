import { type optionsWebpack } from './types/types';
import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type Configuration } from 'webpack';

export const bundlePlugins = (
  option: optionsWebpack
): Configuration['plugins'] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(option.path.template, 'index.html'),
    }),
  ];

  return plugins;
};
