import { type Configuration } from 'webpack-dev-server';
import { type optionsWebpack } from '../src/types/options-webpack';

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
