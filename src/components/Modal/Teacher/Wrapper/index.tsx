// Libs
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

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

  if (!data) notFound();

  return <TeacherModal defaultValues={data} onClose={onClose} />;
};
