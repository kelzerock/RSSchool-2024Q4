import { type Configuration } from 'webpack';
import { type OptionsWebpack } from '../src/types/options-webpack';

export const bundleOutput = (
  options: OptionsWebpack
): Configuration['output'] => {
  const output: Configuration['output'] = {
    filename: 'main-[contenthash].js',
    path: options.path.build,
    clean: true,
  };
  return output;
};
