import Head from 'next/head'

const HeadTitle = ({ title }: { title?: string }) => (
  <Head>
    <title>{title ? `${title} | V1V2` : "V1V2: Let's upgrade your codebase"}</title>
  </Head>
)
export default HeadTitle
