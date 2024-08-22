'use client';

// Libs
import dynamic from 'next/dynamic';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';

const StudentModal = dynamic(() => import('@/components/Modal/Student/Modal'));

const HeaderBarStudent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && <StudentModal onClose={onClose} />}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          Add Student
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarStudent;
