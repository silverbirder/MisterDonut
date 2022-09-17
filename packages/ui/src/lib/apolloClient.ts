import fetch from "cross-fetch";
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT
    ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`
    : "/graphql",
  fetch,
});

export const createApolloClient = (
  defaultOptions?: DefaultOptions | undefined
) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ...(defaultOptions ? { defaultOptions } : {}),
  });
