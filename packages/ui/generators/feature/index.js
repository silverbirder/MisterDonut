const path = require("path");
const fs = require("fs");

const featuresDir = path.join(process.cwd(), "src/features");

/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Feature Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "feature name",
    },
  ],
  actions: () => {
    return [
      {
        type: "add",
        path: featuresDir + "/{{name}}/index.ts",
        template: 'export * from "./components";\n',
      },
      {
        type: "add",
        path: featuresDir + "/{{name}}/components/index.ts",
        template: "// COMPONENT EXPORT\n",
      },
      {
        type: "add",
        path: featuresDir + "/{{name}}/hooks/index.ts",
        template: "export {};\n",
      },
      {
        type: "add",
        path: featuresDir + "/{{name}}/operations/query/query.graphql",
      },
      {
        type: "add",
        path: featuresDir + "/{{name}}/operations/mutation/mutation.graphql",
      },
      {
        type: "add",
        path: featuresDir + "/{{name}}/types/index.ts",
        template: "export type {};\n",
      },
    ];
  },
};
