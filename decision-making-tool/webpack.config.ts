import path from "path";
import { ModeEnv, WebpackOptions } from "./config/types/Types";
import configBuilder from "./config/configBuilder";



export default (env: ModeEnv) => {

  const webpackOptions: WebpackOptions = {
    paths: {
      public: path.resolve(__dirname, "public"),
      bundler: path.resolve(__dirname, "dist"),
      entryTS: path.resolve(__dirname, "src", "index.ts"),
    },
    env
  }

  return configBuilder(webpackOptions);
}
