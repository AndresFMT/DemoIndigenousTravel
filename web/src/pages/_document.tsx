import Document, { Html, Main, NextScript, Head } from "next/document"

import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

// theme
import palette from 'src/theme/palette';

class MyDocument extends Document {

  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;

    const cache = createCache({ key: 'css' });
    const { extractCriticalToChunks } = createEmotionServer(cache);


    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => {
          return (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          );
        },
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <meta name="theme-color" content={palette.light.primary.main} />
          <link href={`/fonts/NunitoSans.css`} rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

