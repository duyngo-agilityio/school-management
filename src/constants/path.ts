import { FiCompass, FiHome, FiTrendingUp } from 'react-icons/fi';

export const PATH = {
  DASHBOARD: '/',
  TEACHERS: '/teachers',
  STUDENTS: '/students',
};

export const LINK_ITEMS = [
  { name: 'Dashboard', icon: FiHome, href: PATH.DASHBOARD },
  { name: 'Teachers', icon: FiTrendingUp, href: PATH.TEACHERS },
  { name: 'Students', icon: FiCompass, href: PATH.STUDENTS },
];
