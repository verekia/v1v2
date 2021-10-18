import { ChakraProvider } from '@chakra-ui/react'
import { wrapPage } from '@v1v2/next'

import theme from 'theme'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>{wrapPage(Component, pageProps)}</ChakraProvider>
)
export default App
