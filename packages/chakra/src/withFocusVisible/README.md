# withFocusVisible

As described on Chakra UI's [CSS Reset docs](https://www.npmjs.com/package/@chakra-ui/css-reset#disabling-border-for-non-keyboard-interactions), it is possible to use the [`focus-visible`](https://www.npmjs.com/package/focus-visible) library to only show the shadow focus outline when the user navigates with the keyboard. However, if you disable Chakra's CSS Reset, or if you want the focus shadow to work properly on checkboxes, switches, and radio, you need [this fix](https://github.com/chakra-ui/chakra-ui/issues/2234#issuecomment-949924839).

This theme extension abstracts the fix to not have to keep it in your theme.

```ts
import { withFocusVisible } from '@v1v2/chakra'

const theme = extendTheme(withFocusVisible())
```

You still need to install `focus-visible` and import it in your app:

```ts
import 'focus-visible/dist/focus-visible'
```
