import { type Configuration } from 'webpack-dev-server';
import { type OptionsWebpack } from '../src/types/options-webpack';

export const bundleDevelopmentServer = (
  option: OptionsWebpack
): Configuration => {
  const developmentServer: Configuration = {
    historyApiFallback: true,
    hot: true,
    port: option.port,
  };

  return developmentServer;
};
