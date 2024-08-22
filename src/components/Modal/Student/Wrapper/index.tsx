// Libs
import dynamic from 'next/dynamic';

// Services
import { getStudentById } from '@/services';

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

  return <StudentModal defaultValues={data} onClose={onClose} />;
};

export default StudentModalWrapper;
