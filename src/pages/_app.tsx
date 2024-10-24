import Layout from '../components/layout';
import CustomThemeProvider from '../context/ThemeProvider';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { createEmotionCache } from '@/@core/utils/create-emotion-cache';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ReciclaMack - Home</title>
        <meta
          name="description"
          content={`Site para promover e apresentar uma parceria com o objetivo de impulsionar a reciclagem de eletrônicos.`}
        />
        <meta
          name="keywords"
          content="Reciclagem de Eletrônicos, Logística Reversa, Pontos de Coleta, Ecopontos, Sustentabilidade, Descarte Correto, Resíduos Eletrônicos, Placas de Circuito Impresso (PCIs), Reaproveitamento de Materiais, Inclusão Digital"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </CacheProvider>
  );
}
