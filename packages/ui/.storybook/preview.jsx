import "@misterdonut/tailwind/tailwind.css";

import { initialize, mswDecorator } from "msw-storybook-addon";
import { ApolloProvider } from "@misterdonut/ui";

// Initialize MSW
initialize();

/** @type {import('@storybook/react').DecoratorFn}  */
const withApolloProvider = (Story) => (
  <ApolloProvider>
    <Story />
  </ApolloProvider>
);

/** @type {import('@storybook/react').DecoratorFn}  */
export const decorators = [mswDecorator, withApolloProvider];

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
