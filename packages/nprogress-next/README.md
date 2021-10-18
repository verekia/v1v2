# @v1v2/nprogress-next

Integrate [NProgress](https://ricostacruz.com/nprogress/) with [Next](https://nextjs.org/) easily.

The progress bar will show up **when navigating between Next pages only**. It listens to Next's `Router` events to control the progress bar.

## Installation

First, make sure `nprogress` is installed in your project.

```sh
npm i @v1v2/nprogress-next
# or
yarn add @v1v2/nprogress-next
```

In your `_app` file:

```jsx
import { nprogressNext } from '@v1v2/nprogress-next'

import 'nprogress/nprogress.css'

nprogressNext({
  // Your regular nprogress options
  minimum: 0.2,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  delay: 300, // This option is added by @v1v2/nprogress-next
})
```

## delay

The `delay` option avoids showing the progress bar if the page load was fast enough, to improve the user's perceived loading speed.
