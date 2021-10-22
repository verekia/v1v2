import { ColorModeScript } from '@chakra-ui/react'
import { HeadCosmetics } from '@v1v2/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import theme, { darkBg } from 'theme'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <HeadCosmetics themeColor={darkBg} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
