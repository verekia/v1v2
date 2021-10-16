import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import 'styles/global.css'

type NextPageWithWrappers = NextPage & {
  getWrappers?: (page: ReactElement) => ReactNode
}

type AppPropsWithWrappers = AppProps & {
  Component: NextPageWithWrappers
}

const App = ({ Component, pageProps }: AppPropsWithWrappers) => {
  const getWrappers = Component.getWrappers ?? (page => page)

  return getWrappers(<Component {...pageProps} />)
}

export default App
