import {
  createClient,
  cacheExchange,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
  RequestPolicy,
} from "urql";

import { createClient as createWSClient } from "graphql-ws";

const wsClient =
  typeof window !== "undefined"
    ? createWSClient({
        url: "ws://localhost:4000/graphql",
      })
    : null;

const sleep = (msec: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, msec);
  });

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  await sleep(500);
  return fetch(input, init);
};

export const createUrqlClient = (requestPolicy?: RequestPolicy) =>
  createClient({
    url: "http://localhost:4000/graphql",
    fetch: customFetch,
    exchanges: [
      dedupExchange,
      cacheExchange,
      fetchExchange,
      subscriptionExchange({
        forwardSubscription: (operation) => ({
          subscribe: (sink) => {
            if (wsClient) {
              const dispose = wsClient.subscribe(operation, sink);
              return {
                unsubscribe: dispose,
              };
            }
            return {
              unsubscribe: () => {},
            };
          },
        }),
      }),
    ],
    requestPolicy,
  });
