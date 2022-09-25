const reactRules = require("./rules/react");

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [
    "./shared",
    "plugin:testing-library/react",
    "plugin:storybook/recommended",
    "prettier",
  ],
  rules: {
    ...reactRules,
  },
};
