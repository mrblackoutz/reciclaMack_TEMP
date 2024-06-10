import { CssBaseline } from "@mui/material";
import Layout from "../components/layout";
import CustomThemeProvider from "../context/ThemeProvider";
// Necessário para alterar a fonte
import { Poppins, Montserrat } from "@fontsource/poppins";

export default function MyApp({ Component, pageProps }) {

  return (
    <CustomThemeProvider>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
}
