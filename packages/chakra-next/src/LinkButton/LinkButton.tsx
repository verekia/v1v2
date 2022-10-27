import React from 'react'

import { Button, ButtonProps } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<LinkProps, 'href' | 'as'>
}

export type LinkButtonProps = Props & ButtonProps

const LinkButton = ({ href, nextLinkProps, children, ...buttonProps }: LinkButtonProps) => (
  <Button as={Link} href={href} {...nextLinkProps} {...buttonProps}>
    {children}
  </Button>
)

export default LinkButton
