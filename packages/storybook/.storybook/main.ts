import type { StorybookConfig } from "@storybook/react/types";
import path from "path";

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
  staticDirs: [path.join(__dirname, "../../", "msw/public")],
  features: {
    interactionsDebugger: true,
  },
};

module.exports = config;
