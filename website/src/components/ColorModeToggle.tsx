import { Icon, IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from 'lib/icons'

const ColorModeToggle = (iconButtonProps: Omit<IconButtonProps, 'aria-label'>) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={<Icon as={colorMode === 'dark' ? SunIcon : MoonIcon} />}
      aria-label={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleColorMode}
      {...iconButtonProps}
    />
  )
}

export default ColorModeToggle
