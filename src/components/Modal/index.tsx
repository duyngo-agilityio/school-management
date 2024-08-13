import {
  Modal as BaseModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface BaseModalProps extends ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  ...rest
}: BaseModalProps) => {
  return (
    <BaseModal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <ModalOverlay />
      <ModalContent minWidth="fit-content" height="fit-content">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>
      </ModalContent>
    </BaseModal>
  );
};

export default Modal;
