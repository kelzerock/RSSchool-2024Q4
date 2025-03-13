import type { Configuration } from "webpack";
import type webpack from "webpack";
import type { WebpackOptions } from "./types/types";
import pluginBuilder from "./plugin-builder";
import resolveBuilder from "./resolve-builder";
import loaderBuilder from "./loader-builder";
import developmentServerBuilder from "./devserver-builder";

const configBuilder = (options: WebpackOptions): Configuration => {
  const isDevelopment = options.env.mode === "development";

  const config: webpack.Configuration = {
    mode: isDevelopment ? "development" : "production",
    devtool: "inline-source-map",
    entry: options.paths.entryTS,
    output: {
      filename: "[contenthash]-main.js",
      path: options.paths.bundler,
      clean: true,
    },
    plugins: pluginBuilder(options),
    module: {
      rules: loaderBuilder(),
    },
    resolve: resolveBuilder(),
    devServer: developmentServerBuilder(options),
    performance: {
      hints: isDevelopment ? false : "warning",
    },
  };

  return config;
};

export default configBuilder;
