# Defer

`Defer` delays the rendering of its content by a number of milliseconds.

```jsx
import { Defer } from '@v1v2/react'

const App = () => <Defer delay={500}>This will appear after 500ms</Defer>
```

## useDefer

You can use the boolean returned by `useDefer` to delay something by a number of milliseconds.

```jsx
import { useDefer } from '@v1v2/react'

const App = () => {
  const deferredBool = useDefer(1000) // false, then true after 1000ms
  // ...
}
```
