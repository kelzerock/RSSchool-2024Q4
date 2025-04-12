import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type Configuration } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { type OptionsWebpack } from '../src/types/options-webpack';

export const bundlePlugins = (
  option: OptionsWebpack
): Configuration['plugins'] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(option.path.template, 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: option.path.favicon, to: option.path.build }],
    }),
  ];

  return plugins;
};
