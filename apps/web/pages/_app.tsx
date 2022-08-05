import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withUrqlClient } from "@misterdonut/graphql-codegen";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(MyApp);
