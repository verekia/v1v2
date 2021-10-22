# HeadCosmetics

Easy setup for favicons, manifest, and theme color.

This setup is based on [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/main/src/index.html) and [Evil Martians's article](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs).

## Options

All properties are optional and can be either a string or `false`:

- `ico`: Defaults to `/favicon.ico`
- `icon180`: Defaults to `/icon-180.png`
- `iconSvg`: Defaults to `/icon.svg`
- `manifest`: Defaults to `/manifest.json` (can alternatively be a `.webmanifest` extension)
- `themeColor`: No default

## Checklist

With the default setup, you need:

- `/favicon.ico` (32x32)
- `/icon.svg`
- `/icon-180.png` (180x180)
- `/icon-192.png` (192x192)
- `/icon-512.png` (512x512)
- `/manifest.json`

Make sure to optimize the files, with [TinyPNG](https://tinypng.com/) or [SVGOMG](https://jakearchibald.github.io/svgomg/) for instance. You can use a generator such as [Favicomatic](https://favicomatic.com/) to create the `.ico` file.

## Next.js

In `_document`:

```tsx
import { HeadCosmetics } from '@v1v2/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // ...
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <HeadCosmetics themeColor="red" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

## React Helmet

With some overrides of the default options:

```tsx
import { headCosmetics } from '@v1v2/react'
import { Helmet } from 'react-helmet'

const App = () => (
  <Helmet>
    {headCosmetics({ themeColor: 'red', iconSvg: false, manifest: 'site.webmanifest' })}
  </Helmet>
)
```

## Manifest

Add the 192x192 and 512x512 icons to your manifest:

```json
{
  "short_name": "Example",
  "name": "Example",
  "start_url": "/",
  "background_color": "#fafafa",
  "theme_color": "#fafafa",
  "display": "standalone",
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

## Dark-mode SVG

[This article](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/) shows how to make your SVG icon adapt to the user's color scheme use CSS media queries:

```xml
<!-- icon.svg -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <style>
    circle {
      fill: yellow;
      stroke: black;
      stroke-width: 3px;
    }
    @media (prefers-color-scheme: dark) {
      circle {
        fill: black;
        stroke: yellow;
      }
    }
  </style>
  <circle cx="50" cy="50" r="47" />
</svg>
```
