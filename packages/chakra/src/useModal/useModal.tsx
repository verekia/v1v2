import React, { useMemo, ReactElement, useCallback } from 'react'

import { Modal, ModalOverlay, ModalContent, ModalProps, useDisclosure } from '@chakra-ui/react'

type ModalPropsWithOmission = Omit<ModalProps, 'children' | 'isOpen' | 'onClose'>

interface Props {
  isModalOpen: boolean
  closeModal: () => void
  trigger: ReactElement
  children: ReactElement
  modalProps?: ModalPropsWithOmission
}

const System = ({ trigger, children, /*modalProps,*/ isModalOpen, closeModal }: Props) => (
  <>
    {trigger}
    <Modal isOpen={isModalOpen} onClose={closeModal} /*{...modalProps} */>
      <ModalOverlay>
        <ModalContent>{children}</ModalContent>
      </ModalOverlay>
    </Modal>
  </>
)

const useModal = () => {
  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure()

  const stableClose = useCallback(closeModal, [])

  const ModalSystem = useCallback(
    // () =>
    ({ trigger, children }) => (
      <System
        trigger={trigger}
        children={children}
        // modalProps={modalProps}
        isModalOpen={isModalOpen}
        closeModal={stableClose}
      />
    ),
    [isModalOpen]
  )

  return { ModalSystem, openModal, closeModal, isModalOpen }
}
export default useModal
