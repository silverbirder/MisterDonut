/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, client } from "@misterdonut/graphql-codegen";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider value={client}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
