import { HeadCosmetics } from '@v1v2/react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <HeadCosmetics themeColor="#111" />
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
