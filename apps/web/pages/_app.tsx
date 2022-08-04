import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withUrqlClient } from "next-urql";
import { client } from "../graphql-client/client";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient((_ssrExchange, ctx) => client)(MyApp);
