module.exports = {
  stories: ["../../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    interactionsDebugger: true,
  },
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
};
