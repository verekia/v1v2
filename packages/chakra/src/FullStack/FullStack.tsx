import React from 'react'

import { HStack, VStack, StackProps } from '@chakra-ui/react'

export const FullHStack = (stackProps: StackProps) => <HStack align="stretch" {...stackProps} />
export const FullVStack = (stackProps: StackProps) => <VStack align="stretch" {...stackProps} />
