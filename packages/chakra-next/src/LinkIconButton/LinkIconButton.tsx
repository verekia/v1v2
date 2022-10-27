import React from 'react'

import { IconButton, IconButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<LinkProps, 'href' | 'as'>
}

export type LinkIconButtonProps = Props & IconButtonProps

const LinkIconButton = ({
  href,
  nextLinkProps,
  children,
  ...iconButtonProps
}: LinkIconButtonProps) => (
  <IconButton as={Link} href={href} {...nextLinkProps} {...iconButtonProps}>
    {children}
  </IconButton>
)

export default LinkIconButton
