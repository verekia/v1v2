import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  LightMode,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, LinkButton } from '@v1v2/chakra-next'
import { MoonIcon, StarIcon, SunIcon } from 'lib/icons'

import { INDEX_PATH, ABOUT_PATH } from 'lib/paths'
import { primaryColor } from 'theme'

const ColorModeToggle = (iconButtonProps: Omit<IconButtonProps, 'aria-label'>) => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(MoonIcon, SunIcon)
  const label = useColorModeValue('Dark mode', 'Light mode')

  return (
    <LightMode>
      <IconButton
        aria-label={label}
        icon={<Icon as={icon} />}
        onClick={toggleColorMode}
        {...iconButtonProps}
      />
    </LightMode>
  )
}

const Header = (boxProps: BoxProps) => (
  <Box shadow="md" py={2} bg={primaryColor} {...boxProps}>
    <Container maxW="container.lg">
      <Flex align="center" justify="space-between">
        <Link href={INDEX_PATH} color="white" _hover={{ textDecor: 'none' }}>
          <Flex align="center" fontWeight="bold">
            <Icon as={StarIcon} mr={2} boxSize={5} /> V1V2 Boilerplate
          </Flex>
        </Link>
        <LightMode>
          <HStack>
            <LinkButton href={INDEX_PATH}>Home</LinkButton>
            <LinkButton href={ABOUT_PATH}>About</LinkButton>
          </HStack>
        </LightMode>
        <ColorModeToggle />
      </Flex>
    </Container>
  </Box>
)

export default Header
