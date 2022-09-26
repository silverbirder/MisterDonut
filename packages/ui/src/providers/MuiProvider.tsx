import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache, Head, theme } from "@ui/lib";

type Props = {
  children: React.ReactNode;
};

export const MuiProvider = ({ children }: Props) => (
  <CacheProvider value={createEmotionCache()}>
    <Head>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta name="emotion-insertion-point" content="" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
