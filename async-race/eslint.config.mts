
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintPluginUnicorn.configs.recommended,
  {
    ignores: ["build/"],
  },
  {
    ignores: ["**/bundle-config.ts",],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
);