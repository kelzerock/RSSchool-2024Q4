import webpack from "webpack";
import { WebpackOptions } from "./types/Types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const pluginBuilder = (options: WebpackOptions) => {
  const plugins: webpack.Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.public, "index.html"),
    }),
  ];

  return plugins;
};

export default pluginBuilder;
