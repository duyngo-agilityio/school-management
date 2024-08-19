// Libs
import { usePathname } from 'next/navigation';

// Components
import NavItem from './Item';

// Constants
import { PATH } from '@/constants';

// Icons
import { HomeIcon, TeacherIcon } from '@/icons';

export const LINK_ITEMS = [
  { name: 'Dashboard', icon: <HomeIcon />, href: PATH.DASHBOARD },
  { name: 'Teachers', icon: <HomeIcon />, href: PATH.TEACHERS },
  {
    name: 'Students/ classes',
    icon: <TeacherIcon width="16" height="16" stroke="white" />,
    href: PATH.STUDENTS,
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
