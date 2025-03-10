import { WebpackOptions } from "./types/Types";
import webpack from "webpack";

const loaderBuilder = (option: WebpackOptions): webpack.Configuration["module"]["rules"] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [tsLoader];
}

export default loaderBuilder;