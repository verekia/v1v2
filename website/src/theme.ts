import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { withBodyColorMode, withFocusVisible, withNoWebkitTapHighlight } from '@v1v2/chakra'

export const darkBg = '#181818'
export const lightBg = '#fff'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(
  withNoWebkitTapHighlight(),
  withFocusVisible(),
  withBodyColorMode({ background: [lightBg, darkBg], color: ['#333', '#e3e3e3'] }),
  {
    config,
    styles: { global: { '#tsparticles': { height: '100%' } } },
  }
)

export default theme
