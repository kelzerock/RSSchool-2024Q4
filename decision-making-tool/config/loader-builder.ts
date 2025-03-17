import type { ModuleOptions } from "webpack";

const loaderBuilder = (): ModuleOptions["rules"] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const postCSS = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader", "postcss-loader"],
  };

  const assetsLoader = {
    test: /\.(mp3)$/i,
    type: "asset/resource",
  };

  return [tsLoader, postCSS, assetsLoader];
};

export default loaderBuilder;
