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
  <ApolloProvider>
    <SupabaseProvider>
      <MuiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiProvider>
    </SupabaseProvider>
  </ApolloProvider>
);

export default MyApp;
