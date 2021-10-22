import { useEffect } from 'react'

import { Button } from '@chakra-ui/react'
import { between, exists, either, wait, defined } from '@v1v2/util'
import { AlertTrigger, ModalTrigger, MotionBox } from '@v1v2/chakra'
import { LinkButton } from '@v1v2/chakra-next'
import { nanoid } from '@v1v2/nanoid'
import { ConditionalWrapper, Defer, useDefer } from '@v1v2/react'

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
  const deferredBool = useDefer(1000)

  const handleClick = async () => {
    console.log(await wait())
    console.log('Delayed click')
  }

  useEffect(() => {
    console.log(between(50, 10, 100))
    console.log(exists(''))
    console.log(either('x', 'y', 'x', 'z'))
    console.log(defined(null))
    console.log(nanoid())
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
      <LinkButton href="/other-page">Other page</LinkButton>
      <Defer delay={1000}>Deferred</Defer>
      <ConditionalWrapper
        condition={deferredBool}
        thenWrapper={children => <span style={{ color: 'green' }}>{children}</span>}
        elseWrapper={children => <span style={{ color: 'red' }}>{children}</span>}
      >
        Content of ConditionalWrapper
      </ConditionalWrapper>
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Motion Box
      </MotionBox>
    </div>
  )
}

IndexPage.getWrappers = page => (
  <div>
    <nav>Nav</nav>
    <div>{page}</div>
  </div>
)

export default IndexPage
