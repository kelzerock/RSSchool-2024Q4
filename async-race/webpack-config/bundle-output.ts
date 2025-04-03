import { type optionsWebpack } from './types/types';
import { type Configuration } from 'webpack';

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
