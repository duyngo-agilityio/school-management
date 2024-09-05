// Libs
import { usePathname } from 'next/navigation';

// Components
import NavItem from './Item';

// Constants
import { ROUTES } from '@/constants';

// Icons
import { HomeIcon, StudentIcon, TeacherIcon } from '@/icons';

export const LINK_ITEMS = [
  { name: 'Dashboard', icon: <HomeIcon />, href: ROUTES.DASHBOARD },
  { name: 'Teachers', icon: <TeacherIcon />, href: ROUTES.TEACHER },
  {
    name: 'Students/ classes',
    icon: <StudentIcon width="16" height="16" stroke="white" />,
    href: ROUTES.STUDENT,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return LINK_ITEMS.map(({ name, icon, href }) => (
    <NavItem key={name} icon={icon} href={href} isActive={href === pathname}>
      {name}
    </NavItem>
  ));
};

export default Navbar;
