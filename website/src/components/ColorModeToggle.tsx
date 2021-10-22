import { Box, BoxProps, Icon, IconButton, Switch, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from 'lib/icons'

const ColorModeToggle = (boxProps: BoxProps) => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box {...boxProps}>
      <Icon as={SunIcon} />
      <Switch
        onChange={toggleColorMode}
        mx={3}
        size="lg"
        _focus={{ boxShadow: 0 }}
        colorScheme="black"
      />
      <Icon as={MoonIcon} />
    </Box>
  )
}

export default ColorModeToggle
