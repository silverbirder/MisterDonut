/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, MuiProvider, SupabaseProvider } from "@misterdonut/ui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SupabaseProvider>
    <ApolloProvider>
      <MuiProvider>
        <Component {...pageProps} />
      </MuiProvider>
    </ApolloProvider>
  </SupabaseProvider>
);

export default MyApp;
