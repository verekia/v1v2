import { ChakraProvider } from '@chakra-ui/react'

import { wrapPage } from '@v1v2/next'

const App = ({ Component, pageProps }) => (
  <ChakraProvider>{wrapPage(Component, pageProps)}</ChakraProvider>
)

export default App
