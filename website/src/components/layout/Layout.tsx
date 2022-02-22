import { Container } from '@chakra-ui/react'

import Header from 'components/layout/Header'

const Layout = ({ children, maxW = undefined }) => (
  <>
    <Header mb={5} />
    <Container maxW={maxW ?? 'container.lg'} pb="200px">
      {children}
    </Container>
  </>
)

export default Layout
