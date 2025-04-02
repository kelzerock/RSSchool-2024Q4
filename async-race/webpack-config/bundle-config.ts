import { Configuration } from "webpack";
import path from "path"
import { optionsWebpack } from "./types/types";
import { bundleDevServer } from "./bundle-devserver";
import { bundlePlugins } from "./bundle-plugins";
import { bundleResolves } from "./bundle-resolves";
import { bundleLoaders } from "./bundle-loaders";
import { bundleOutput } from "./bundle-output";

export const bundleConfig = (options: optionsWebpack): Configuration => {

  const isDev = options.mode === "dev" ? true : false

  const config: Configuration = {
    mode: isDev ? "development" : "production",
    devtool: "inline-source-map",
    entry: path.resolve(options.path.entry, "index.ts"),
    output: bundleOutput(options),
    devServer: bundleDevServer(options),
    plugins: bundlePlugins(options),
    module: bundleLoaders(options),
    resolve: bundleResolves(options)
  };


  return config
}
