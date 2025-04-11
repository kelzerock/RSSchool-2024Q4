import { type Configuration } from 'webpack';
import { type optionsWebpack } from '../src/types/options-webpack';

export const bundleOutput = (
  options: optionsWebpack
): Configuration['output'] => {
  const output: Configuration['output'] = {
    filename: 'main-[contenthash].js',
    path: options.path.build,
    clean: true,
  };
  return output;
};
