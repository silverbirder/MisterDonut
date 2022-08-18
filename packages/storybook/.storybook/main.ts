import type { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
  stories: ["../../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["./public"],
  features: {
    interactionsDebugger: true,
  },
};

module.exports = config;
