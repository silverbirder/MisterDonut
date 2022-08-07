import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, client } from "@misterdonut/graphql-codegen";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </Provider>
  );
}

export default MyApp;
