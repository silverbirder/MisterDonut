/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import "@misterdonut/tailwind/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@misterdonut/ui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
