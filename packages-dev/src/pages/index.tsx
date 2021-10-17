import { useEffect } from 'react'

import { Button } from '@chakra-ui/react'
import { between, exists, either, wait } from '@v1v2/util'
import { AlertTrigger, ModalTrigger } from '@v1v2/chakra'
import { LinkButton } from '@v1v2/chakra-next'

const AlertContent = ({ closeAlert, leastDestructiveRef }) => (
  <>
    <div>Are you sure?</div>
    <Button ref={leastDestructiveRef} onClick={closeAlert}>
      Cancel
    </Button>
    <Button onClick={closeAlert}>Yes</Button>
  </>
)

const ModalContent = ({ closeModal }) => (
  <>
    <div>Modal Content</div>
    <Button onClick={closeModal}>Close</Button>
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
      <Button onClick={handleClick}>Delayed log</Button>
      <ModalTrigger trigger={openModal => <Button onClick={openModal}>Open Modal</Button>}>
        {closeModal => <ModalContent closeModal={closeModal} />}
      </ModalTrigger>
      <AlertTrigger trigger={openAlert => <Button onClick={openAlert}>Open Alert</Button>}>
        {({ closeAlert, leastDestructiveRef }) => (
          <AlertContent closeAlert={closeAlert} leastDestructiveRef={leastDestructiveRef} />
        )}
      </AlertTrigger>
      <LinkButton href="https://google.com">Google</LinkButton>
    </div>
  )
}

export default IndexPage
