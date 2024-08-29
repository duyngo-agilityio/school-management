// Libs
import dynamic from 'next/dynamic';

// Services
import { getStudentById } from '@/services';
import { notFound } from 'next/navigation';

const StudentModal = dynamic(() => import('../Modal'));

interface StudentModalWrapperProps {
  id: string;
  onClose: () => void;
}

const StudentModalWrapper = async ({
  id,
  onClose,
}: StudentModalWrapperProps) => {
  const data = await getStudentById(id);

  if (!data) notFound();

  return <StudentModal defaultValues={data} onClose={onClose} />;
};

export default StudentModalWrapper;
