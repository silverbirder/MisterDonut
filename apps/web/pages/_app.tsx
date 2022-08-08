import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, client } from "@misterdonut/graphql-codegen";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
