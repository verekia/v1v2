import { Box, Button, Container, Icon, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import { MotionBox } from '@v1v2/chakra'

import ColorModeToggle from 'components/ColorModeToggle'
import HeadTitle from 'components/HeadTitle'
import ParticlesContainer from 'components/ParticlesContainer'

import Logo from 'images/logo.svg'
import { BookIcon, FeatherIcon, GithubIcon, StackIcon, TrainingIcon } from 'lib/icons'

const MainButton = ({ href, children, icon }) => {
  const bg = useColorModeValue('gray.100', '#222')

  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      size="lg"
      w="full"
      leftIcon={<Icon as={icon} boxSize={6} mr={2} />}
      justifyContent="left"
      background={bg}
      colorScheme="gray"
      pl={[5, 20]}
    >
      {children}
    </Button>
  )
}

const IndexPage = () => {
  const logoFill = useColorModeValue('#333', '#e3e3e3')

  return (
    <Box pos="relative" h="100vh">
      <HeadTitle />
      <ColorModeToggle pos="absolute" top={3} right={3} zIndex={1} />
      <Container maxW="400px" backdropFilter="saturate(200%) blur(5px)" px="50px" pb="50px">
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
            <MotionBox
              key={item.label}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <MainButton href={item.href} icon={item.icon}>
                {item.label}
              </MainButton>
            </MotionBox>
          ))}
        </VStack>
      </Container>
      <MotionBox
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1.5 }}
        w="full"
        h="full"
        pos="absolute"
        zIndex={-1}
        top={0}
      >
        <ParticlesContainer />
      </MotionBox>
    </Box>
  )
}

export default IndexPage
