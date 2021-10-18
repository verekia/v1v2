# MotionBox

A Chakra `Box` enriched with Framer Motion capabilities.

```jsx
import { MotionBox } from '@v1v2/chakra'

const App = () => (
  <MotionBox
    initial={{ translateX: -100, opacity: 0 }}
    animate={{ translateX: 0, opacity: 1 }}
    mr={5}
  >
    Hello
  </MotionBox>
)
```
