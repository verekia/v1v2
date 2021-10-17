# AlertTrigger

**`AlertTrigger`** reduces Chakra UI's `Alert` boilerplate. It requires 2 render props, `trigger`, and `children`.

Use `alertProps` to pass down props to `Alert` if needed.

```jsx
import { AlertTrigger } from '@v1v2/chakra'

const AlertContent = ({ closeAlert, leastDestructiveRef }) => (
  <>
    <div>Are you sure?</div>
    <button ref={leastDestructiveRef} onClick={closeAlert}>
      Cancel
    </button>
    <button onClick={closeAlert}>Yes</button>
  </>
)

const App = () => (
  <AlertTrigger trigger={openAlert => <button onClick={openAlert}>Open Alert</button>}>
    {({ closeAlert, leastDestructiveRef }) => (
      <AlertContent closeAlert={closeAlert} leastDestructiveRef={leastDestructiveRef} />
    )}
  </AlertTrigger>
)
```
