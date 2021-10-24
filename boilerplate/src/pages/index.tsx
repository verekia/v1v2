import { Heading } from '@chakra-ui/react'

import Layout from 'components/layout/Layout'

const IndexPage = () => <Heading as="h1">Welcome</Heading>

IndexPage.wrappers = page => <Layout>{page}</Layout>

export default IndexPage
