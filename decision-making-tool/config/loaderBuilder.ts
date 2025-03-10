import webpack from "webpack";

const loaderBuilder = (): webpack.Configuration["module"]["rules"] => {

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [tsLoader];
}

export default loaderBuilder;