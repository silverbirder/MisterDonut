/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloProvider,
  MuiProvider,
  SupabaseProvider,
  Layout,
} from "@misterdonut/ui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SupabaseProvider>
    <ApolloProvider>
      <MuiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiProvider>
    </ApolloProvider>
  </SupabaseProvider>
);

export default MyApp;
