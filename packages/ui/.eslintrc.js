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
    {
      files: ["**/*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      parserOptions: {
        operations: "**/*.graphql",
        schema: "../../apps/api/src/schema/schema.graphql",
      },
      extends: "plugin:@graphql-eslint/operation-all",
    },
  ],
};
