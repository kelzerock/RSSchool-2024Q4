const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "[contenthash]-main.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
};
