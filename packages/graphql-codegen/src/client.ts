import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Exchange,
  OperationResult,
} from "urql";
import { pipe, tap, map } from "wonka";
import { Donut } from "../generated/graphql";

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  await sleep(500);
  return fetch(input, init);
};

const transformExchange: Exchange = ({ forward }) => {
  return (ops$) =>
    pipe(
      ops$,
      tap((op) => console.log("[Exchange debug]: Incoming operation: ", op)),
      forward,
      tap((result) =>
        console.log("[Exchange debug]: Completed operation: ", result)
      ),
      // sample transform
      map((result: OperationResult<any, any>) => {
        if (result.data.donuts) {
          const donuts: Donut[] = result.data.donuts;
          result.data.donuts = donuts.map((d: Donut) =>
            Object.assign(
              {
                name: d.name?.trim(),
              },
              d
            )
          );
        }
        return result;
      })
    );
};

const client = createClient({
  url: "http://localhost:4000/graphql",
  suspense: true,
  fetch: customFetch,
  exchanges: [dedupExchange, cacheExchange, transformExchange, fetchExchange],
});

export { client };
