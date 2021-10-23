# withBodyColorMode

Easily set up your body background and text color for light and dark mode in a Chakra theme.

```ts
import { withBodyColorMode } from '@v1v2/chakra'

const theme = extendTheme(
  withBodyColorMode({ background: ['white', 'black'], color: ['black', 'white'] })
)
```
