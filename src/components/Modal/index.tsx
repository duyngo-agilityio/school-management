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

interface BaseModalProps extends Omit<ModalProps, 'isOpen'> {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose, ...rest }: BaseModalProps) => (
  <BaseModal closeOnOverlayClick={false} onClose={onClose} {...rest} isOpen>
    <ModalOverlay />
    <ModalContent minWidth="fit-content" height="fit-content">
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>{children}</ModalBody>
    </ModalContent>
  </BaseModal>
);

export default Modal;
