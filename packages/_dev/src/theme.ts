import { extendTheme } from '@chakra-ui/react'

import { withBodyColorMode, withNoWebkitTapHighlight, withFocusVisible } from '@v1v2/chakra'

const theme = extendTheme(
  withBodyColorMode({ background: ['white', 'black'], color: ['black', 'white'] }),
  withNoWebkitTapHighlight(),
  withFocusVisible()
)

export default theme
