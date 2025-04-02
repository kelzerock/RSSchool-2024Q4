import { optionsWebpack } from "./types/types";
import { Configuration } from "webpack-dev-server";

export const bundleDevelopmentServer = (option: optionsWebpack): Configuration => {
  const developmentServer: Configuration = {
    historyApiFallback: true,
    hot: true,
    port: option.port,
    static: option.path.build,
  }

  return developmentServer;
}
