# ModalTrigger

**`ModalTrigger`** reduces Chakra UI's `Modal` boilerplate. It requires 2 render props, `trigger`, and `children`.

Use `modalProps` to pass down props to `Modal` if needed.

```jsx
import { ModalTrigger } from '@v1v2/chakra'

const ModalContent = ({ closeModal }) => (
  <>
    <div>Modal Content</div>
    <button onClick={closeModal}>Close</button>
  </>
)

const App = () => (
  <ModalTrigger trigger={openModal => <button onClick={openModal}>Open Modal</button>}>
    {closeModal => <ModalContent closeModal={closeModal} />}
  </ModalTrigger>
)
```
