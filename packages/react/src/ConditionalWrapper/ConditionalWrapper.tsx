import React, { ReactNode } from 'react'

const ConditionalWrapper = ({
  condition,
  thenWrapper,
  elseWrapper,
  children,
}: {
  condition: boolean
  thenWrapper: (children: ReactNode) => ReactNode
  elseWrapper?: (children: ReactNode) => ReactNode
  children: ReactNode
}) => <>{condition ? thenWrapper(children) : elseWrapper ? elseWrapper(children) : children}</>

export default ConditionalWrapper
