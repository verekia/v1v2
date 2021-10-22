import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const darkBg = '#181818'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }) => ({
      body: {
        background: colorMode === 'dark' ? darkBg : '#fff',
        color: colorMode === 'dark' ? '#e3e3e3' : '#333',
      },
    }),
  },
  components: {
    Button: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
    Link: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
  },
})

export default theme
