import { type Configuration } from 'webpack';

export const bundleLoaders = (): Configuration['module'] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const postCssLoader = {
    test: /\.css$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['@tailwindcss/postcss']],
          },
        },
      },
    ],
  };

  const module: Configuration['module'] = {
    rules: [tsLoader, postCssLoader],
  };

  return module;
};
