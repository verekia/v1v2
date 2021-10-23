import { mergeThemeOverride, ThemeExtension } from '@chakra-ui/react'

const withFocusVisible = (): ThemeExtension =>
  mergeThemeOverride({
    styles: {
      global: {
        '.js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]':
          { outline: 'none', shadow: 'none' },
      },
    },
  })

export default withFocusVisible
