import fetch from "cross-fetch";
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  : "";

const headers = {
  apikey,
  authorization: `Bearer ${apikey}`,
};

const uri = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`
  : "/graphql";

const link = createHttpLink({
  uri,
  fetch,
  headers,
});

export const createApolloClient = (
  defaultOptions?: DefaultOptions | undefined
) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ...(defaultOptions ? { defaultOptions } : {}),
  });
