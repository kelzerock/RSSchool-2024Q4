import { WebpackOptions } from "./types/Types";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

const devServerBuilder = (option: WebpackOptions) => {
  const devServer: WebpackDevServerConfiguration = {
    static: {
      directory: option.paths.bundler,
    },
    compress: true,
    port: option.env.port || 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  }

  return devServer
}

export default devServerBuilder;