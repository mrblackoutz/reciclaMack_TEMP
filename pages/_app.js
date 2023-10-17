import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "../components/layout";
import theme from "../styles/theme";

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
