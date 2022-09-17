import { ApolloProvider as Provider, DefaultOptions } from "@apollo/client";
import { createApolloClient } from "../lib";

type Props = {
  children: React.ReactNode;
  defaultOptions?: DefaultOptions | undefined;
};

export const ApolloProvider = ({ children, defaultOptions }: Props) => (
  <Provider client={createApolloClient(defaultOptions)}>{children}</Provider>
);
