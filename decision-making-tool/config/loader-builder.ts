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

  const fileLoader = {
    test: /\.mp3$/,
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  };

  return [tsLoader, postCSS, fileLoader];
};

export default loaderBuilder;
