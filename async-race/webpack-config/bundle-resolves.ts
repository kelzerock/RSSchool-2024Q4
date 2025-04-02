import { Configuration } from "webpack"

export const bundleResolves = (): Configuration["resolve"] => {
  const resolve: Configuration["resolve"] = {
    extensions: [".tsx", ".ts", ".js"],
  }

  return resolve;
}