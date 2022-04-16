import React, { useRef, ReactElement, RefObject } from 'react'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogProps,
  useDisclosure,
} from '@chakra-ui/react'

type AlertPropsWithOmission = Omit<AlertDialogProps, 'children' | 'isOpen' | 'onClose'>

interface Props {
  trigger: (openAlert: () => void) => ReactElement
  children: ({
    leastDestructiveRef,
    closeAlert,
  }: {
    leastDestructiveRef: RefObject<any>
    closeAlert: () => void
  }) => ReactElement
  alertProps?: AlertPropsWithOmission
  overlayProps?: any
  contentProps?: any
}

const AlertTrigger = ({ trigger, children, alertProps, overlayProps, contentProps }: Props) => {
  const { isOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
  const leastDestructiveRef = useRef(null)

  return (
    <>
      {trigger(openAlert)}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={leastDestructiveRef}
        onClose={closeAlert}
        {...alertProps}
      >
        <AlertDialogOverlay {...overlayProps}>
          <AlertDialogContent {...contentProps}>
            {children({ leastDestructiveRef, closeAlert })}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default AlertTrigger
