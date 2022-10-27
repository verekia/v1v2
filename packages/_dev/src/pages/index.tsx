import { useEffect } from 'react'

import { Box, Button, HStack, VStack, useColorMode, Menu } from '@chakra-ui/react'
import { between, exists, either, wait, defined } from '@v1v2/util'
import {
  AlertTrigger,
  ModalTrigger,
  MotionBox,
  FullVStack,
  FullHStack,
  // useModal,
} from '@v1v2/chakra'
import { Link, LinkButton, LinkIconButton, LinkMenuItem } from '@v1v2/chakra-next'
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

const ModalContent2 = ({ closeModal }) => (
  <>
    <div>Modal Content 2</div>
    <Button onClick={closeModal}>Close</Button>
  </>
)

const IndexPage = () => {
  const deferredBool = useDefer(1000)
  const { toggleColorMode } = useColorMode()
  // const { ModalSystem, closeModal: closeModal2, openModal: openModal2 } = useModal(ModalContent2)

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
      <ModalTrigger
        contentProps={{ maxW: '100px' }}
        trigger={openModal => <Button onClick={openModal}>Open Modal</Button>}
      >
        {closeModal => <ModalContent closeModal={closeModal} />}
      </ModalTrigger>
      {/* <ModalSystem trigger={<Button onClick={openModal2}>Open Modal 2</Button>}>
        <ModalContent2 closeModal={closeModal2} />
      </ModalSystem> */}
      <AlertTrigger trigger={openAlert => <Button onClick={openAlert}>Open Alert</Button>}>
        {({ closeAlert, leastDestructiveRef }) => (
          <AlertContent closeAlert={closeAlert} leastDestructiveRef={leastDestructiveRef} />
        )}
      </AlertTrigger>
      <Link href="/other-page">Other page</Link>
      <LinkButton href="/other-page">Other page</LinkButton>
      <LinkIconButton icon={<span>Icon</span>} href="/other-page" />
      <Menu>
        <LinkMenuItem href="/other-page">Other page</LinkMenuItem>
      </Menu>
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
      <Button onClick={toggleColorMode}>Color mode toggle</Button>
      <br />
      Normal HStack / VStack
      <HStack h={20}>
        <Box bg="blue.200">1</Box>
        <Box bg="blue.200">2</Box>
        <Box bg="blue.200">3</Box>
      </HStack>
      <VStack>
        <Box bg="blue.200">1</Box>
        <Box bg="blue.200">2</Box>
        <Box bg="blue.200">3</Box>
      </VStack>
      FullHStack / FullVStack
      <FullHStack h={20}>
        <Box bg="blue.200">1</Box>
        <Box bg="blue.200">2</Box>
        <Box bg="blue.200">3</Box>
      </FullHStack>
      <FullVStack>
        <Box bg="blue.200">1</Box>
        <Box bg="blue.200">2</Box>
        <Box bg="blue.200">3</Box>
      </FullVStack>
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
