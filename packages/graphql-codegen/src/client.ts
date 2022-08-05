import { createClient } from "urql";
import { withUrqlClient } from "next-urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  suspense: true,
});

const withUrqlClientWrap: any = withUrqlClient((_ssrExchange, ctx) => client);
export { withUrqlClientWrap };
