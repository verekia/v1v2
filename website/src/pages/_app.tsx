import type { ReactElement, ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import theme from 'theme'

type NextPageWithWrappers = NextPage & {
  getWrappers?: (page: ReactElement) => ReactNode
}

type AppPropsWithWrappers = AppProps & {
  Component: NextPageWithWrappers
}

const App = ({ Component, pageProps }: AppPropsWithWrappers) => {
  const getWrappers = Component.getWrappers ?? (page => page)

  return <ChakraProvider theme={theme}>{getWrappers(<Component {...pageProps} />)}</ChakraProvider>
}

export default App
