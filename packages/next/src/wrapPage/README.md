# wrapPage

Generalization of Vercel's [`getLayout`](https://nextjs.org/docs/basic-features/layouts#with-typescript) technique to re-use layouts (or any other page wrappers) when navigating between pages. This avoids unnecessary re-renders of the wrappers.

In your `_app` file:

```jsx
import { wrapPage } from '@v1v2/next'

const App = ({ Component, pageProps }) => (
  <SomeProvider>
    <AnotherProvider>{wrapPage(Component, pageProps)}</AnotherProvider>
  </SomeProvider>
)
```

In your page files:

```jsx
import Layout from 'components/Layout'

const AboutPage = () => <div>About</div>

AboutPage.wrappers = page => <Layout>{page}</Layout>
```
