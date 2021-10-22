import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const darkBg = '#181818'
export const lightBg = '#fff'

const config: ThemeConfig = {
  initialColorMode: 'dark',
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
    }),
  },
  components: {
    Button: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
    Link: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
  },
})

export default theme
