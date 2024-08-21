'use client';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';
import TeacherModal from '@/components/Modal/Teacher/Modal';

const HeaderBarTeacher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && <TeacherModal isOpen={isOpen} onClose={onClose} />}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          Add Teacher
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarTeacher;
