import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"


module.exports = (env) => {
  const config: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
      filename: "main-[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: "./dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "template", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
