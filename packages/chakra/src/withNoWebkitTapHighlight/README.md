# withNoWebkitTapHighlight

This theme extension disables mobile Chrome's `-webkit-tap-highlight-color` blue highlight / outline globally for your app. It will give a more native feel to your app, but will **degrade accessibility for your users**. You should probably not use this module, unless you have a very good reason to (I use it on private personal projects).

Instead, you should disable the highlight for specific elements, which may be supported by this module in the future. For now, please use with caution.

```ts
import { withNoWebkitTapHighlight } from '@v1v2/chakra'

const theme = extendTheme(withNoWebkitTapHighlight())
```

Note: You can test `-webkit-tap-highlight-color` on desktop by long-pressing an element with Chrome Developer Tools set to emulate mobile devices.
