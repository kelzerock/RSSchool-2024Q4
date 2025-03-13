import path from "node:path";
import type { ModeEnvironment, WebpackOptions } from "./config/types/types";
import configBuilder from "./config/config-builder";
import type { Configuration } from "webpack";

const webpackConfig = (env: ModeEnvironment): Configuration => {
  const webpackOptions: WebpackOptions = {
    paths: {
      public: path.resolve(__dirname, "public"),
      bundler: path.resolve(__dirname, "dist"),
      entryTS: path.resolve(__dirname, "src", "index.ts"),
    },
    env,
  };

  return configBuilder(webpackOptions);
};
export default webpackConfig;
