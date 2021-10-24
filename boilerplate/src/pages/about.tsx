import { Heading } from '@chakra-ui/react'

import Layout from 'components/layout/Layout'

const AboutPage = () => <Heading as="h1">About</Heading>

AboutPage.wrappers = page => <Layout>{page}</Layout>

export default AboutPage
