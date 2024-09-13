// Libs
import { memo } from 'react';

// Components
import { Button, Flex, Text } from '@chakra-ui/react';
import Modal from '..';

interface ConfirmModalProps {
  title: string;
  labelButton?: string;
  subTitle?: string;
  onClose: () => void;
  onSubmit: () => void;
}

const ConfirmModal = ({
  title,
  labelButton = 'Delete',
  subTitle,
  onClose,
  onSubmit,
}: ConfirmModalProps) => {
  return (
    <Modal onClose={onClose} title={title} size="xs" isCentered>
      <Text variant="primary" size="md">
        {subTitle}
      </Text>
      <Flex justifyContent="flex-end" mt="30px">
        <Button mr="10px" onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="red" onClick={onSubmit}>
          {labelButton}
        </Button>
      </Flex>
    </Modal>
  );
};

export default memo(ConfirmModal);
