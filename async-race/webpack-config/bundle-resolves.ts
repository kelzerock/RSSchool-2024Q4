import { Configuration } from "webpack"
import { optionsWebpack } from "./types/types"

export const bundleResolves = (option: optionsWebpack): Configuration["resolve"] => {
  const resolve: Configuration["resolve"] = {
    extensions: [".tsx", ".ts", ".js"],
  }

  return resolve;
}