## exists

**`exists`** returns `true` if its argument is not `null` or `undefined`.

```js
import { exists } from '@v1v2/util'

// Return true
exists('a')
exists('')
exists(0)
exists(NaN)

// Return false
exists(null)
exists(undefined)
exists(void 0)
```
