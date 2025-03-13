import type webpack from "webpack";
const resolveBuilder = (): webpack.Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};

export default resolveBuilder;
