import { Box, BoxProps, Button, Container, Icon, VStack, StackProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Logo from 'images/logo.svg'
import { BookIcon, FeatherIcon, GithubIcon, TrainingIcon } from 'lib/icons'

const MotionBox = motion<BoxProps>(Box)
const MotionVStack = motion<StackProps>(VStack)

const MainButton = ({ href, children, icon, index }) => (
  <MotionBox
    initial={{ translateX: -100, opacity: 0 }}
    animate={{ translateX: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.2, delay: index * 0.2 }}
  >
    <a href={href} target="_blank" rel="noreferrer">
      <Button
        size="lg"
        w="full"
        leftIcon={<Icon as={icon} boxSize={6} mr={2} />}
        justifyContent="left"
        pl={[5, 20]}
      >
        {children}
      </Button>
    </a>
  </MotionBox>
)

const IndexPage = () => (
  <Container maxW="330px">
    <Box pt={20} pb={12}>
      <Logo fill="#eee" />
    </Box>
    <MotionVStack align="stretch">
      {[
        { href: 'https://github.com/v1v2/v1v2', label: 'Open Source', icon: GithubIcon },
        { href: 'https://www.verekia.com/mentoring', label: 'Mentoring', icon: BookIcon },
        { href: 'https://www.verekia.com/training', label: 'Training', icon: TrainingIcon },
        { href: 'https://www.verekia.com/front-end/', label: 'Blog', icon: FeatherIcon },
      ].map((item, i) => (
        <MainButton href={item.href} icon={item.icon} key={item.label} index={i}>
          {item.label}
        </MainButton>
      ))}
    </MotionVStack>
  </Container>
)

export default IndexPage
