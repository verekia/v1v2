import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const darkBg = '#181818'
export const lightBg = '#fff'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }) => ({
      body: {
        background: colorMode === 'dark' ? darkBg : lightBg,
        color: colorMode === 'dark' ? '#e3e3e3' : '#333',
      },
      '#tsparticles': { height: '100%' },
      '*': { WebkitTapHighlightColor: 'transparent' },
      '.chakra-switch__track': { boxShadow: 'none !important' },
    }),
  },
})

export default theme
