import React, { ReactElement } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalProps,
  ModalOverlayProps,
  ModalContentProps,
  useDisclosure,
} from '@chakra-ui/react'

type ModalPropsWithOmission = Omit<ModalProps, 'children' | 'isOpen' | 'onClose'>

interface Props {
  trigger: (openModal: () => void) => ReactElement
  children: (closeModal: () => void) => ReactElement
  modalProps?: ModalPropsWithOmission
  overlayProps?: ModalOverlayProps
  contentProps?: ModalContentProps
}

const ModalTrigger = ({ trigger, children, modalProps, overlayProps, contentProps }: Props) => {
  const { isOpen, onOpen: openModal, onClose: closeModal } = useDisclosure()

  return (
    <>
      {trigger(openModal)}
      <Modal isOpen={isOpen} onClose={closeModal} {...modalProps}>
        <ModalOverlay {...overlayProps}>
          <ModalContent {...contentProps}>{children(closeModal)}</ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
export default ModalTrigger
