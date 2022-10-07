/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import fetch from "cross-fetch";
import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  : "";

const uri = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`
  : "http://localhost:4449/graphql";

const link = createHttpLink({
  uri,
  fetch,
});

const authLink = setContext(() => {
  const token = localStorage.getItem("supabase.auth.token");
  const headers = {
    apikey,
    authorization: token
      ? `Bearer ${JSON.parse(token).currentSession.access_token}`
      : `Bearer ${apikey}`,
  };
  return {
    headers,
  };
});

export const createApolloClient = (
  defaultOptions?: DefaultOptions | undefined
) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
    ...(defaultOptions ? { defaultOptions } : {}),
  });
