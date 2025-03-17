import type { Configuration } from "webpack";
import type { WebpackOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "node:path";

const pluginBuilder = (options: WebpackOptions): Configuration["plugins"] => {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: path.resolve(options.paths.public, "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(options.paths.public, "redirect"),
          to: options.paths.bundler,
        },
      ],
    }),
  ];

  return plugins;
};

export default pluginBuilder;
