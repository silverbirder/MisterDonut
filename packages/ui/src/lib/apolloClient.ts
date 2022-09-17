import fetch from "cross-fetch";
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const SUPABASE_API_PROJECT_API_KEYS = process.env
  .NEXT_PUBLIC_SUPABASE_API_PROJECT_API_KEYS
  ? process.env.NEXT_PUBLIC_SUPABASE_API_PROJECT_API_KEYS
  : "";

const headers = {
  apikey: SUPABASE_API_PROJECT_API_KEYS,
  authorization: `Bearer ${SUPABASE_API_PROJECT_API_KEYS}`,
};

const uri = process.env.NEXT_PUBLIC_SUPABASE_API_ENDPOINT
  ? process.env.NEXT_PUBLIC_SUPABASE_API_ENDPOINT
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
