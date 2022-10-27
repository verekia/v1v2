import React from 'react'

import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface Props {
  href: string
  nextLinkProps?: Omit<NextLinkProps, 'href' | 'as'>
}

export type LinkProps = Props & ChakraLinkProps

const Link = ({ href, nextLinkProps, children, ...chakraLinkProps }: LinkProps) => (
  <ChakraLink as={NextLink} href={href} {...nextLinkProps} {...chakraLinkProps}>
    {children}
  </ChakraLink>
)

export default Link
