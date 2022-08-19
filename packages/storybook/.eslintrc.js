/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["custom", "prettier"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
