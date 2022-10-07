import { initialize, mswDecorator } from "msw-storybook-addon";
import { ApolloProvider, MuiProvider, SupabaseProvider } from "@misterdonut/ui";

// Initialize MSW
initialize();

const mockClient = {
  auth: {
    user: () => {
      return { id: "id" };
    },
  },
};

/** @type {import('@storybook/react').DecoratorFn}  */
const withApolloProvider = (Story) => (
  <SupabaseProvider client={mockClient}>
    <ApolloProvider>
      <MuiProvider>
        <Story />
      </MuiProvider>
    </ApolloProvider>
  </SupabaseProvider>
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
