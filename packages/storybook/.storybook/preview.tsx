import { initialize, mswDecorator } from "msw-storybook-addon";
import { UrqlProvider } from "@misterdonut/ui";
import { Story } from "@storybook/react";

initialize();

/** @type {import('@storybook/react').DecoratorFn} */
const withUrqlProvider = (Story: Story) => (
  <UrqlProvider requestPolicy="network-only">
    <Story />
  </UrqlProvider>
);

/** @type {import('@storybook/react').DecoratorFn} */
export const decorators = [mswDecorator, withUrqlProvider];

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
