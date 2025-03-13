import type { WebpackOptions } from "./types/types";
import type { Configuration as WebpackDevelopmentServerConfiguration } from "webpack-dev-server";

const developmentServerBuilder = (
  option: WebpackOptions,
): WebpackDevelopmentServerConfiguration => {
  const developmentServer: WebpackDevelopmentServerConfiguration = {
    static: {
      directory: option.paths.bundler,
    },
    compress: true,
    port: option.env.port || 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  };

  return developmentServer;
};

export default developmentServerBuilder;
