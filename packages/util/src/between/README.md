# between

**`between`** tests if a numeral value is between two bounds. Alternatively, Lodash's `inRange` provides slightly different features.

Replace:

```js
const x = 50
if (x >= 10 && x <= 100)
```

By:

```js
import { between } from '@v1v2/util'

const x = 50
if (between(x, 10, 100))
```

The bounds are compared inclusively by default. Use the last parameter to change the inclusion mode:

- `include` (default)
- `exclude`
- `exclude-lower` (same as `include-upper`)
- `exclude-upper` (same as `include-lower`)

```js
import { between } from '@v1v2/util'

const x = 50
between(x, 10, 100) // true

between(10, 10, 100) // true
between(100, 10, 100) // true

between(10, 10, 100, 'exclude-lower') // false
between(100, 10, 100, 'exclude-upper') // false

between(10, 10, 100, 'exclude') // false
between(100, 10, 100, 'exclude') // false
```
