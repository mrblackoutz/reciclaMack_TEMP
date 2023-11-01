import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "../components/layout";
import theme from "../styles/theme";

import { useEffect } from "react";
import { Poppins, Montserrat } from "@fontsource/poppins";

export default function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
