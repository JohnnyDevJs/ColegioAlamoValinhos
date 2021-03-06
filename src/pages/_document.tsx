import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import React from 'react'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="icon"
            href="http://colegioalamovalinhos.com.br/favicon.ico"
          />

          <script async src="//paginas.rocks/scripts/capture/capture.js" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Y9Q65CGSK3"
          />
          <script
            async
            src="https://assets.calendly.com/assets/external/widget.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push( arguments );}
          gtag('js', new Date());

          gtag('config', 'G-Y9Q65CGSK3');
          `
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1037276980034501');
                fbq('track', 'PageView');
              `
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <img
                  height="1"
                  width="1"
                  style="display:none"
                  src="https://www.facebook.com/tr?id=1037276980034501&ev=PageView&noscript=1"
                  `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
