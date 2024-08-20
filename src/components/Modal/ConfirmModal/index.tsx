// Components
import { Button, Flex, Text } from '@chakra-ui/react';
import Modal from '..';

interface ConfirmModalProps {
  title: string;
  subTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ConfirmModal = ({
  title,
  subTitle,
  isOpen,
  onClose,
  onSubmit,
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="xs">
      <Text variant="primary" size="md">
        {subTitle}
      </Text>
      <Flex justifyContent="flex-end" mt="30px">
        <Button mr="10px" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="red" onClick={onSubmit}>
          Delete
        </Button>
      </Flex>
    </Modal>
  );
};

export default ConfirmModal;
