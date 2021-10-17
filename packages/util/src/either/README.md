# either

**`either`** returns `true` if the first argument equals (shallow) any of the other arguments.

Replace:

```js
if (something === 'foo' || something === 'bar' || something === 'baz')
// or
if (['foo', 'bar', 'baz'].includes(something))
```

By:

```js
import { either } from '@v1v2/util'

if (either(something, 'foo', 'bar', 'baz'))
```
