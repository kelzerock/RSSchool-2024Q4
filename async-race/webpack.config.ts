import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"
import { bundleConfig } from "./webpack-config/bundle-config";
import { mode, optionsWebpack } from "./webpack-config/types/types";

type env = { mode: mode }

module.exports = (env: env) => {
  const options: optionsWebpack = {
    path: {
      entry: path.resolve(__dirname, "src"),
      build: path.resolve(__dirname, "build"),
      template: path.resolve(__dirname, "template"),
    },
    mode: env.mode,
    port: 3000
  }

  return bundleConfig(options);
};
