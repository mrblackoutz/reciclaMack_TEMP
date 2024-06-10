import { CssBaseline } from "@mui/material";
import Layout from "../components/layout";
import CustomThemeProvider from "../context/ThemeProvider";

export default function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <CustomThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </Layout>
  );
}
