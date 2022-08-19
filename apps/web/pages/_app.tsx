/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UrqlProvider } from "@misterdonut/ui";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UrqlProvider>
    <Component {...pageProps} />
  </UrqlProvider>
);

export default MyApp;
