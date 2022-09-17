/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["@misterdonut/eslint-config/react"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/prefer-default-export": "error",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ["**/*.test.tsx"],
      rules: {
        "import/prefer-default-export": "error",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ["**/*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      parserOptions: {
        operations: "**/*.graphql",
        schema: "./schema.graphql",
      },
      extends: "plugin:@graphql-eslint/operations-all",
    },
  ],
};
