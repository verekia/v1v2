import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: { global: { body: { background: '#111', color: '#eee' } } },
  components: {
    Button: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
    Link: { baseStyle: { WebkitTapHighlightColor: 'transparent' } },
  },
})

export default theme
