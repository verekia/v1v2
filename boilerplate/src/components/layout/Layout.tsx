import { Container } from '@chakra-ui/react'

import Header from 'components/layout/Header'

const Layout = ({ children }) => (
  <>
    <Header mb={5} />
    <Container maxW="container.lg">{children}</Container>
  </>
)

export default Layout
