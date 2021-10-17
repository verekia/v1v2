import { useEffect } from 'react'

import { between, exists, either, wait } from '@v1v2/util'
import { AlertTrigger, ModalTrigger } from '@v1v2/chakra'

const AlertContent = ({ closeAlert, leastDestructiveRef }) => (
  <>
    <div>Are you sure?</div>
    <button ref={leastDestructiveRef} onClick={closeAlert}>
      Cancel
    </button>
    <button onClick={closeAlert}>Yes</button>
  </>
)

const ModalContent = ({ closeModal }) => (
  <>
    <div>Modal Content</div>
    <button onClick={closeModal}>Close</button>
  </>
)

const IndexPage = () => {
  const handleClick = async () => {
    console.log(await wait())
    console.log('Delayed click')
  }

  useEffect(() => {
    console.log(between(50, 10, 100))
    console.log(exists(''))
    console.log(either('x', 'y', 'x', 'z'))
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Delayed log</button>
      <ModalTrigger trigger={openModal => <button onClick={openModal}>Open Modal</button>}>
        {closeModal => <ModalContent closeModal={closeModal} />}
      </ModalTrigger>
      <AlertTrigger trigger={openAlert => <button onClick={openAlert}>Open Alert</button>}>
        {({ closeAlert, leastDestructiveRef }) => (
          <AlertContent closeAlert={closeAlert} leastDestructiveRef={leastDestructiveRef} />
        )}
      </AlertTrigger>
    </div>
  )
}

export default IndexPage
