// Libs
import dynamic from 'next/dynamic';

// Components
import { getTeacherById } from '@/services';

const TeacherModal = dynamic(() => import('../Modal'));

interface TeacherModalWrapperProps {
  id: string;
  onClose: () => void;
}

export const TeacherModalWrapper = async ({
  id,
  onClose,
}: TeacherModalWrapperProps) => {
  const data = await getTeacherById(id);

  return <TeacherModal defaultValues={data} onClose={onClose} />;
};
