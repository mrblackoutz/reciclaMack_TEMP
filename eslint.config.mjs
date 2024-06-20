// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    "extends": [
      "next",
      "plugin:@next/next/recommended",
      "next/core-web-vitals",
      "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["prettier"], 
    "rules": {
      // Suas regras personalizadas aqui
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "prettier/prettier": "error"
    }
  }
];