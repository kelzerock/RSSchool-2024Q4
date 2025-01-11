import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

// import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.js"],
    rules: {
      "prefer-const": "error",
    },
  },
];
