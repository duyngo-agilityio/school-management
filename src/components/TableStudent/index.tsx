'use client';

// Libs
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { memo, Suspense, useState } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import Table from '../Table';
import Profile from '../Profile';
import StudentModalWrapper from '../Modal/Student/Wrapper';

// Constants
import {
  COLUMNS,
  customColors,
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
} from '@/constants';

// Types
import { IStudent } from '@/types';

// Icons
import PenIcon from '@/icons/PenIcon';
import TrashIcon from '@/icons/TrashIcon';

// Services
import { deleteStudent } from '@/actions';

// Hooks
import { useDelete } from '@/hooks';

const ConfirmModal = dynamic(() => import('../Modal/ConfirmModal'));

interface TableStudentProps {
  data: IStudent[];
}

const TableStudent = ({ data }: TableStudentProps) => {
  const {
    isOpen: isOpenStudentModal,
    onOpen: onOpenStudentModal,
    onClose: onCloseStudentModal,
  } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const { push } = useRouter();

  const param = useParams<{ id: string }>();

  const [idItem, setIdItem] = useState<string>('');

  const handleShowConfirmModal = (id: string) => () => {
    setIdItem(id);
    onOpenConfirmModal();
  };

  const handleShowEditModal = (id: string) => () => {
    setIdItem(id);
    onOpenStudentModal();
  };

  const { handleSubmitDelete } = useDelete(deleteStudent, {
    successMessage: SUCCESS_MESSAGES.DELETE_STUDENT,
    errorMessage: ERROR_MESSAGES.DELETE_STUDENT,
    onCloseConfirmModal,
  });

  const handleDelete = () => {
    handleSubmitDelete(idItem);
    push(ROUTES.STUDENT);
  };

  const handleNavigate = (id: string) => {
    push(`${ROUTES.STUDENT}/${id}`);
  };

  const COLUMNS_STUDENT = [
    {
      field: COLUMNS.FIELDS.NAME,
      headerName: COLUMNS.HEADER_NAME.NAME,
      render: ({ fullName, avatar }: IStudent) => {
        return <Profile src={avatar} title={fullName} variant="xs" />;
      },
    },
    {
      field: COLUMNS.FIELDS.ID,
      headerName: COLUMNS.HEADER_NAME.STUDENT_ID,
    },
    {
      field: COLUMNS.FIELDS.EMAIL,
      headerName: COLUMNS.HEADER_NAME.EMAIL,
    },
    {
      field: COLUMNS.FIELDS.CLASS,
      headerName: COLUMNS.HEADER_NAME.CLASS,
    },
    {
      field: COLUMNS.FIELDS.GENDER,
      headerName: COLUMNS.HEADER_NAME.GENDER,
      render: ({ gender }: IStudent) => {
        const renderGender = gender === 1 ? 'Male' : 'Female';

        return <Box>{renderGender}</Box>;
      },
    },
    {
      field: COLUMNS.FIELDS.ACTION,
      headerName: COLUMNS.HEADER_NAME.ACTION,
      type: COLUMNS.TYPE.ACTION,
      render: ({ id }: IStudent) => {
        const active = param.id === id;

        return (
          <>
            <Button
              variant="none"
              mr="10px"
              aria-label="Edit Button"
              onClick={handleShowEditModal(id)}
            >
              <PenIcon
                stroke={active ? customColors.pure : customColors.emperor}
              />
            </Button>
            <Button
              variant="none"
              aria-label="Delete Button"
              onClick={handleShowConfirmModal(id)}
            >
              <TrashIcon
                stroke={active ? customColors.pure : customColors.emperor}
              />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      {isOpenStudentModal && (
        <Suspense>
          <StudentModalWrapper id={idItem} onClose={onCloseStudentModal} />
        </Suspense>
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          onClose={onCloseConfirmModal}
          onSubmit={handleDelete}
          title="Delete Student"
          subTitle="Are you sure you want to delete this Student?"
        />
      )}
      <Table columns={COLUMNS_STUDENT} data={data} onClick={handleNavigate} />
    </>
  );
};

export default memo(TableStudent, isEqual);
