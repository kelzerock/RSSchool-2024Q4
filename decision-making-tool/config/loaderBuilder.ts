import { ModuleOptions } from "webpack";

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

  return [tsLoader, postCSS];
};

export default loaderBuilder;
