import globals from "globals";
import pluginJs from "@eslint/js";
// import airbnb from "airbnb-base";
import {} from "eslint-config-airbnb-base";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // airbnb.configs.recommended,
];
