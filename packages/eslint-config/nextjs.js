const reactRules = require("./rules/react");

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  extends: ["./shared", "next/core-web-vitals", "prettier"],
  rules: {
    ...reactRules,
  },
};
