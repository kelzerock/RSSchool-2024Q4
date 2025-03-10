import webpack from "webpack";
import { WebpackOptions } from "./types/Types";
import pluginBuilder from "./pluginBuilder";
import resolveBuilder from "./resolveBuilder";
import loaderBuilder from "./loaderBuilder";
import devServerBuilder from "./devServerBuilder";

const configBuilder = (options: WebpackOptions) => {

  const isDev = options.env.mode === "development"

  const config: webpack.Configuration = {
    mode: isDev ? "development" : "production",
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
    devServer: devServerBuilder(options),
  };

  return config;
}

export default configBuilder;