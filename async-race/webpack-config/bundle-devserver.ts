import { type optionsWebpack } from './types/types';
import { type Configuration } from 'webpack-dev-server';

export const bundleDevelopmentServer = (
  option: optionsWebpack
): Configuration => {
  const developmentServer: Configuration = {
    historyApiFallback: true,
    hot: true,
    port: option.port,
  };

  return developmentServer;
};
