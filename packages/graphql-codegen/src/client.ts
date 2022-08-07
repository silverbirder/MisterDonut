import { createClient } from "urql";

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  await sleep(500);
  return fetch(input, init);
};

const client = createClient({
  url: "http://localhost:4000/graphql",
  suspense: true,
  fetch: customFetch,
});

export { client };
