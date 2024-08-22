'use client';

// Libs
import dynamic from 'next/dynamic';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';

const TeacherModal = dynamic(() => import('@/components/Modal/Teacher/Modal'));

const HeaderBarTeacher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && <TeacherModal onClose={onClose} />}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          Add Teacher
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarTeacher;
