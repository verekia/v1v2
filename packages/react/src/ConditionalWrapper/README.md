# ConditionalWrapper

`ConditionalWrapper` wraps its content with a `thenWrapper` and optionally an `elseWrapper` if a `condition` is met.

```jsx
import { ConditionalWrapper } from '@v1v2/react'

const App = () => (
  <ConditionalWrapper
    condition={someBoolean}
    thenWrapper={children => <span style={{ color: 'green' }}>{children}</span>}
    elseWrapper={children => <span style={{ color: 'red' }}>{children}</span>}
  >
    Content
  </ConditionalWrapper>
)
```
