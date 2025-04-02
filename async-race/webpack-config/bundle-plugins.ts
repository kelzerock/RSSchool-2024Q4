import { optionsWebpack } from "./types/types";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack"

export const bundlePlugins = (option: optionsWebpack): Configuration["plugins"] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(option.path.template, "index.html"),
    })

  ]


  return plugins;
}