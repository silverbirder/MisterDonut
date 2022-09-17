const path = require("path");

/** @type {import("@storybook/react/types").StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(
          __dirname,
          "../../../apps/web/next.config.js"
        ),
      },
    },
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: [path.join(__dirname, "../../", "msw/public")],
  features: {
    interactionsDebugger: true,
  },
};
