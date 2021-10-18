import React, { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithWrappers = NextPage & {
  wrappers?: (page: ReactElement) => ReactNode
}

export type AppPropsWithPageWrappers = AppProps & {
  Component: NextPageWithWrappers
}

const wrapPage = (Component: NextPageWithWrappers, pageProps: any) => {
  const wrappers = Component.wrappers ?? ((page) => page)

  return wrappers(<Component {...pageProps} />)
}

export default wrapPage
