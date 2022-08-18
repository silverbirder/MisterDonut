/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.{js,ts,tsx}"],
      extends: ["custom", "prettier"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/prefer-default-export": "error",
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
};
