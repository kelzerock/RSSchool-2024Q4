const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { runtime } = require("webpack");

module.exports = (env) => {
  const typeBuild = env.mode === "production" ? "production" : "development";

  return {
    mode: typeBuild,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.[contenthash:8].js",
      chunkFilename: "chank-[id].[chunkhash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js"],
    },
  };
};
