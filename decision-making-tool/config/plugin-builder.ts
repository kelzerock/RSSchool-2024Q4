import type { Configuration } from "webpack";
import type { WebpackOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

const pluginBuilder = (options: WebpackOptions): Configuration["plugins"] => {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.public, "index.html"),
    }),
  ];

  return plugins;
};

export default pluginBuilder;
