import webpack from "webpack";

const loaderBuilder = (): webpack.Configuration["module"]["rules"] => {
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
