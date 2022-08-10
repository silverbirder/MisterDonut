import { createClient } from "urql";

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

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetch: customFetch,
});

export { client };
