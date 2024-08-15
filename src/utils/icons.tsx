import { CallIcon, SmsIcon, TeacherIcon } from '@/icons';

// The icons used on the information details page
export const createIcons = (
  width = '24',
  height = '24',
  stroke = '#A7A7A7',
) => [
  {
    id: 1,
    icon: <TeacherIcon width={width} height={height} stroke={stroke} />,
  },
  {
    id: 2,
    icon: <CallIcon width={width} height={height} stroke={stroke} />,
  },
  {
    id: 3,
    icon: <SmsIcon width={width} height={height} stroke={stroke} />,
  },
];
