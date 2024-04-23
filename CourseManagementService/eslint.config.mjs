import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser  }},
  {
    rules: {
        "no-unused-vars": "off",
        "no-undef": "off"
    }
},
  pluginJs.configs.recommended,
];




