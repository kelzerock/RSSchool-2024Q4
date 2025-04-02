import { Configuration } from "webpack";
import { optionsWebpack } from "./types/types";

export const bundleLoaders = (option: optionsWebpack): Configuration["module"] => {

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const module: Configuration["module"] = {
    rules: [
      tsLoader,
    ],
  }

  return module;
}