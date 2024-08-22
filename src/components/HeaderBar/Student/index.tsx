'use client';

// Components
import StudentModal from '@/components/Modal/Student/Modal';
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';

const HeaderBarStudent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && <StudentModal isOpen={isOpen} onClose={onClose} />}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          Add Student
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarStudent;
