import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {env: {
    browser: true,
    es2021: true,
    node: true,  // Add this line
  }},
  pluginJs.configs.recommended,
];