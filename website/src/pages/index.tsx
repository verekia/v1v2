import { Box, Button, Container, Icon, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import { MotionBox } from '@v1v2/chakra'

import ColorModeToggle from 'components/ColorModeToggle'

import Logo from 'images/logo.svg'
import { BookIcon, FeatherIcon, GithubIcon, StackIcon, TrainingIcon } from 'lib/icons'

const MainButton = ({ href, children, icon, index }) => (
  <MotionBox
    initial={{ translateX: -100, opacity: 0 }}
    animate={{ translateX: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.2, delay: index * 0.2 }}
  >
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      size="lg"
      w="full"
      leftIcon={<Icon as={icon} boxSize={6} mr={2} />}
      justifyContent="left"
      pl={[5, 20]}
    >
      {children}
    </Button>
  </MotionBox>
)

const IndexPage = () => {
  const logoFill = useColorModeValue('#333', '#e3e3e3')

  return (
    <>
      <ColorModeToggle pos="absolute" top={3} right={3} />
      <Container maxW="330px">
        <Box pt={16} pb={12}>
          <Logo fill={logoFill} />
          <Heading as="h2" size="md" textAlign="center" mt={5}>
            Let's upgrade your codebase
          </Heading>
        </Box>
        <VStack align="stretch">
          {[
            { href: 'https://github.com/v1v2/v1v2', label: 'Open Source', icon: GithubIcon },
            { href: 'https://www.verekia.com/mentoring', label: 'Mentoring', icon: BookIcon },
            { href: 'https://www.verekia.com/training', label: 'Training', icon: TrainingIcon },
            { href: 'https://stack.v1v2.io', label: 'Stack', icon: StackIcon },
            { href: 'https://www.verekia.com/front-end/', label: 'Blog', icon: FeatherIcon },
          ].map((item, i) => (
            <MainButton href={item.href} icon={item.icon} key={item.label} index={i}>
              {item.label}
            </MainButton>
          ))}
        </VStack>
      </Container>
    </>
  )
}

export default IndexPage
