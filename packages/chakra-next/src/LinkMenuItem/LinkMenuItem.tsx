import React from 'react'

import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<LinkProps, 'href' | 'as'>
}

export type LinkMenuItemProps = Props & MenuItemProps

const LinkMenuItem = ({ href, nextLinkProps, children, ...menuItemProps }: LinkMenuItemProps) => (
  <MenuItem as={Link} href={href} {...nextLinkProps} {...menuItemProps}>
    {children}
  </MenuItem>
)

export default LinkMenuItem
