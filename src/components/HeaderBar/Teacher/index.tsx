'use client';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';
import TeacherModal from '@/components/Modal/TeacherModal';

const HeaderBarTeacher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && (
        <TeacherModal isOpen={isOpen} onClose={onClose} title="Add Teacher" />
      )}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          Add Teacher
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarTeacher;
