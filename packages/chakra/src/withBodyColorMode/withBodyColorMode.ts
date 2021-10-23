import { mergeThemeOverride, ThemeExtension } from '@chakra-ui/react'

const withBodyColorMode = ({
  background,
  color,
}: {
  background?: [lightModeBackground: string, darkModeBackground: string]
  color?: [lightModeColor: string, darkModeColor: string]
}): ThemeExtension =>
  mergeThemeOverride({
    styles: {
      global: ({ colorMode }) => ({
        body: {
          ...(background
            ? { background: colorMode === 'dark' ? background[1] : background[0] }
            : {}),
          ...(color ? { color: colorMode === 'dark' ? color[1] : color[0] } : {}),
        },
      }),
    },
  })

export default withBodyColorMode
