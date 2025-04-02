import path from "node:path";
import { bundleConfig } from "./webpack-config/bundle-config";
import { mode, optionsWebpack } from "./webpack-config/types/types";

interface Environment { mode: mode }

const webpackConfig = (environment: Environment) => {
  const options: optionsWebpack = {
    path: {
      entry: path.resolve(__dirname, "src"),
      build: path.resolve(__dirname, "build"),
      template: path.resolve(__dirname, "template"),
    },
    mode: environment.mode,
    port: 3000
  }

  return bundleConfig(options);
};


export default webpackConfig;