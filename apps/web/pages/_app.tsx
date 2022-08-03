import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withUrqlClient } from "next-urql";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: "http://localhost:4000/graphql",
  suspense: true,
}))(MyApp);
