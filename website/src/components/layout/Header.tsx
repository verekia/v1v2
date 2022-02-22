import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, LinkButton } from '@v1v2/chakra-next'
import { MoonIcon, SunIcon } from 'lib/icons'

import { GAMEDEV_PATH, INDEX_PATH } from 'lib/paths'

const ColorModeToggle = (iconButtonProps: Omit<IconButtonProps, 'aria-label'>) => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(MoonIcon, SunIcon)
  const label = useColorModeValue('Dark mode', 'Light mode')

  return (
    <IconButton
      aria-label={label}
      icon={<Icon as={icon} />}
      onClick={toggleColorMode}
      {...iconButtonProps}
    />
  )
}

const Header = (boxProps: BoxProps) => (
  <Box shadow="md" py={2} {...boxProps}>
    <Container maxW="container.lg">
      <Flex align="center" justify="space-between">
        <Link href={INDEX_PATH} _hover={{ textDecor: 'none' }}>
          <Flex align="center" fontWeight="bold">
            V1V2
          </Flex>
        </Link>
        <HStack>
          <LinkButton variant="ghost" href={INDEX_PATH}>
            Home
          </LinkButton>
          <LinkButton variant="ghost" href={GAMEDEV_PATH}>
            Game Dev
          </LinkButton>
        </HStack>
        <ColorModeToggle />
      </Flex>
    </Container>
  </Box>
)

export default Header
