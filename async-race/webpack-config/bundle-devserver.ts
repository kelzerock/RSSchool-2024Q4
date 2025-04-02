import { optionsWebpack } from "./types/types";
import { Configuration, Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export const bundleDevServer = (option: optionsWebpack): Configuration => {
  const devServer: Configuration = {
    historyApiFallback: true,
    hot: true,
    port: option.port,
    static: option.path.build,
  }

  return devServer;
}
