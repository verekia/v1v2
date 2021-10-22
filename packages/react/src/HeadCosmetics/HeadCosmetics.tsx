import React from 'react'

export interface HeadCosmeticsOptions {
  ico?: string | false
  icon180?: string | false
  iconSvg?: string | false
  manifest?: string | false
  themeColor?: string | false
}

export const headCosmetics = ({
  ico = '/favicon.ico',
  icon180 = '/icon-180.png',
  iconSvg = '/icon.svg',
  manifest = '/manifest.json',
  themeColor,
}: HeadCosmeticsOptions = {}) =>
  [
    ico && <link key="ico" rel="icon" sizes="any" href={ico} />,
    icon180 && <link key="icon-180" rel="apple-touch-icon" href={icon180} />,
    iconSvg && <link key="icon-svg" rel="icon" type="image/svg+xml" href={iconSvg} />,
    manifest && <link key="manifest" rel="manifest" href={manifest} />,
    themeColor && <meta key="theme-color" name="theme-color" content={themeColor} />,
  ].filter(x => x)

const HeadCosmetics = (options?: HeadCosmeticsOptions) => <>{headCosmetics(options)}</>

export default HeadCosmetics
