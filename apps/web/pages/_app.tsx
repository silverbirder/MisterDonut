/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, MuiProvider } from "@misterdonut/ui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider>
    <MuiProvider>
      <Component {...pageProps} />
    </MuiProvider>
  </ApolloProvider>
);

export default MyApp;
