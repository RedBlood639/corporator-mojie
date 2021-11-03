import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
// styled-component
import { ServerStyleSheet } from 'styled-components'

// ----------------------------------------------------------------------

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400,400italic,500,700,700italic,900"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400italic,700,700italic"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:900"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Changa:wght@500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
