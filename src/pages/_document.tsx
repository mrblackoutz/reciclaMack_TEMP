// ** React Import
import { Children } from 'react';

// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document';

// ** Emotion Imports
import createEmotionServer from '@emotion/server/create-instance';

// ** Utils Imports
import { createEmotionCache } from '@/@core/utils/create-emotion-cache';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const EmotionServer = createEmotionServer(cache);
  const extractCriticalToChunks = (html: string) =>
    EmotionServer.extractCriticalToChunks(html);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <App
          {...props} // @ts-expect-error Description: Ignoring type error because the emotionCache prop is not recognized by the App component.
          emotionCache={cache}
        />
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => {
    return (
      <style
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
      />
    );
  });

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

export default CustomDocument;
