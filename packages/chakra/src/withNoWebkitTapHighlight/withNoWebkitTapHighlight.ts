import { mergeThemeOverride, ThemeExtension } from '@chakra-ui/react'

const withNoWebkitTapHighlight = (): ThemeExtension =>
  mergeThemeOverride({ styles: { global: { html: { WebkitTapHighlightColor: 'transparent' } } } })

export default withNoWebkitTapHighlight
