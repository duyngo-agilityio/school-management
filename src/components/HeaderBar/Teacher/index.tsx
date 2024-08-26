'use client';

// Libs
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

// Components
import { Button, useDisclosure } from '@chakra-ui/react';
import HeaderBar from '..';

// Constants
import { ROUTES } from '@/constants';

const TeacherModal = dynamic(() => import('@/components/Modal/Teacher/Modal'));
const StudentModal = dynamic(() => import('@/components/Modal/Student/Modal'));

const HeaderBarTeacher = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderButton =
    pathname === ROUTES.STUDENT ? 'Add Student' : 'Add Teacher';
  const renderModal =
    pathname === ROUTES.STUDENT ? (
      <StudentModal onClose={onClose} />
    ) : (
      <TeacherModal onClose={onClose} />
    );

  return (
    <>
      {isOpen && renderModal}
      <HeaderBar width="full">
        <Button variant="primary" onClick={onOpen}>
          {renderButton}
        </Button>
      </HeaderBar>
    </>
  );
};

export default HeaderBarTeacher;
