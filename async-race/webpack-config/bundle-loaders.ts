import { Configuration } from "webpack";

export const bundleLoaders = (): Configuration["module"] => {

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