## defined

**`defined`** returns `true` if its argument is not `undefined`.

```js
import { defined } from '@v1v2/util'

// Return true
defined('a')
defined('')
defined(0)
defined(NaN)
defined(null)

// Return false
defined(undefined)
defined(void 0)
```
