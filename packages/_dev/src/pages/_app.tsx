import { ChakraProvider } from '@chakra-ui/react'
import { wrapPage } from '@v1v2/next'
import { nprogressNext } from '@v1v2/nprogress-next'

import 'nprogress/nprogress.css'

nprogressNext({
  minimum: 0.2,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  delay: 0,
})

const App = ({ Component, pageProps }) => (
  <ChakraProvider>{wrapPage(Component, pageProps)}</ChakraProvider>
)

export default App
