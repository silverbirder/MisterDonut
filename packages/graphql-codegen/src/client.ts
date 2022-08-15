import {
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";
import {
  cacheExchange,
  UpdatesConfig,
  Cache,
  ResolveInfo,
} from "@urql/exchange-graphcache";

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

const updates: UpdatesConfig = {
  Mutation: {
    editCategory: <EditCategoryMutation, EditCategoryMutationVariables>(
      result: EditCategoryMutation,
      args: EditCategoryMutationVariables,
      cache: Cache,
      info: ResolveInfo
    ) => {
      console.log({ result, args, cache, info });
    },
  },
  Subscription: {},
};

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetch: customFetch,
  exchanges: [
    dedupExchange,
    cacheExchange({}),
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
});

export { client };
